package com.Backend.springBootApplication.controller;

import com.Backend.springBootApplication.dto.contactMessageDTO;
import com.Backend.springBootApplication.model.contactMessage;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Backend.springBootApplication.service.ContactMessageService;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@CrossOrigin
@RequestMapping(value = "/api/contact-messages", produces = MediaType.APPLICATION_JSON_VALUE)
public class contactMessageController {

    private final ContactMessageService contactMessageService;

    public contactMessageController(ContactMessageService contactMessageService) {
        this.contactMessageService = contactMessageService;
    }

    @GetMapping
    public List<contactMessageDTO> getAllontactMessages() {
        return contactMessageService.findAllMessages().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<contactMessageDTO> createContactMessage(@RequestBody contactMessageDTO contactMessageDTO) {
        contactMessage contactMessage = convertToEntity15111(contactMessageDTO);
        contactMessage createdContactMessage = contactMessageService.saveMessage(contactMessage);
        contactMessageDTO createdContactMessageDTO = convertToDTO(createdContactMessage);
        return ResponseEntity.ok(createdContactMessageDTO);
    }

    // Utility method to convert Entity to DTO
    private contactMessageDTO convertToDTO(contactMessage contactMessage) {
        return new contactMessageDTO(contactMessage.getName(), contactMessage.getEmail(), contactMessage.getMessage());
    }

    // Utility method to convert DTO to Entity
    private contactMessage convertToEntity15111(contactMessageDTO MessageDTO) {
        return new contactMessage(MessageDTO.getName(), MessageDTO.getEmail(), MessageDTO.getMessage());
    }

    // Other CRUD endpoints can be added here...
}
