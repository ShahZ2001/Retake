package com.Backend.springBootApplication.service;

import com.Backend.springBootApplication.model.faq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Backend.springBootApplication.repository.faqRepository;

import java.util.List;
import java.util.Optional;

@Service
public class faqService {
	 private final faqRepository faqRepository;

	    @Autowired
	    public faqService(faqRepository faqRepository) {
	        this.faqRepository = faqRepository;
	    }

	    public List<faq> findAllFaqs() {
	        return faqRepository.findAll();
	    }

	    public Optional<faq> findFaqById(Long id) {
	        return faqRepository.findById(id);
	    }

	    public faq saveFaq(faq faq) {
	        return faqRepository.save(faq);
	    }
	    public List<faq> findAllFaqsSortedByViews() {
	        return faqRepository.findAllByOrderByViewsDesc();
	    }
	    public void deleteFaq(Long id) {
	        faqRepository.deleteById(id);
	    }
	    public faq incrementFaqViewCount(Long id) {
	        faq faq = faqRepository.findById(id).orElseThrow(() -> new RuntimeException("FAQ not found"));
	        faq.incrementViewCount(); //ADD SOMETHING IN CONTROLLER 
	        return faqRepository.save(faq);
	    }


}
