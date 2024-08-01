package com.Backend.springBootApplication.controller;

import com.Backend.springBootApplication.model.faq;
import com.Backend.springBootApplication.service.faqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/faqs")
public class faqController {
    private final faqService service;

    @Autowired
    public faqController(faqService service) {
        this.service = service;
    }

    // Fetch all FAQs
    @GetMapping
    public List<faq> getAllfaqs() {
        return service.findAllFaqs();
    }

    // Fetch all FAQs sorted by views
    @GetMapping("/sorted")
    public List<faq> getFAQsSortedByViews() {
        return service.findAllFaqsSortedByViews();
    }

    // Fetch a single FAQ by its ID
    @GetMapping("/{id}")
    public ResponseEntity<faq> getFaqById(@PathVariable Long id) {
        faq faq = service.findFaqById(id)
                         .orElseThrow(() -> new RuntimeException("FAQ not found with id: " + id));
        return ResponseEntity.ok(faq);
    }

    // Create a new FAQ
    @PostMapping
    public ResponseEntity<faq> createFAQ(@RequestBody faq newFaq) {
        faq faq = service.saveFaq(newFaq);
        return ResponseEntity.ok(faq);
    }

    // Update an existing FAQ
    @PutMapping("/{id}")
    public ResponseEntity<faq> updateFAQ(@PathVariable Long id, @RequestBody faq faqDetails) {
        faq existingFaq = service.findFaqById(id)
                                 .orElseThrow(() -> new RuntimeException("FAQ not found with id: " + id));
        existingFaq.setQuestion(faqDetails.getQuestion());
        existingFaq.setAnswer(faqDetails.getAnswer());
        final faq updatedFaq = service.saveFaq(existingFaq);
        return ResponseEntity.ok(updatedFaq);
    }

    // Increment the view count of an FAQ
    @PutMapping("/increment-views/{id}")
    public ResponseEntity<faq> incrementFaqViews(@PathVariable Long id) {
        faq updatedFaq = service.incrementFaqViewCount(id);
        return ResponseEntity.ok(updatedFaq);
    }

    // Delete an FAQ
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFAQ(@PathVariable Long id) {
        service.deleteFaq(id);
        return ResponseEntity.ok().build();
    }
}
