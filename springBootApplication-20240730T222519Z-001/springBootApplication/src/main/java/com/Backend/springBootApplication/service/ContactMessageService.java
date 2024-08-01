package com.Backend.springBootApplication.service;

import com.Backend.springBootApplication.model.contactMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.Backend.springBootApplication.repository.contactMesageRepository;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class ContactMessageService {

    private final contactMesageRepository contactMessageRepo;

    @Autowired
    public ContactMessageService(contactMesageRepository contactMessageRepo) {
        this.contactMessageRepo = contactMessageRepo;
    }

    public contactMessage saveMessage(contactMessage message) {
        if (validateMessage(message) && isValidEmail(message.getEmail())&& isContentValid(message.getMessage())){
            return (contactMessageRepo.save(message));
        } else {
            throw new IllegalArgumentException("Invalid contact message data");
        }
    }

    private boolean validateMessage(contactMessage message) {
      
        return message != null && message.getMessage() != null && !message.getMessage().trim().isEmpty() && isValidEmail(message.getEmail());
    }

    private boolean isValidEmail(String email) {
        if (email == null || email.trim().isEmpty()) {
            return false;
        }

        // Regular expression to validate the email address
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

        // Compile the ReGex
        Pattern pattern = Pattern.compile(emailRegex);
        
        // Match the given input against this pattern
        Matcher matcher = pattern.matcher(email.trim());

        return matcher.matches();
        
    }
    private boolean isContentValid(String content) {
        List<String> bannedWords = Arrays.asList("Fuck", "shit", "cunt"); //  more words as needed

        for (String word : bannedWords) {
            if (content.toLowerCase().contains(word)) {
                return false; 
            }
        }
        return true; 
    }
    @Autowired
    private JavaMailSender mailSender;
    
    public void sendAutomatedResponse(contactMessage message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(message.getEmail());
        mailMessage.setSubject("Thank you for contacting us");
        mailMessage.setText("Hello " + message.getName() + "Thank you for reaching out. We have received your message and our team will get back to you shortly. The team at Feed The Need");

        mailSender.send(mailMessage);
    }
    public List<contactMessage> findAllMessages() {
        return contactMessageRepo.findAll();
    }
}

