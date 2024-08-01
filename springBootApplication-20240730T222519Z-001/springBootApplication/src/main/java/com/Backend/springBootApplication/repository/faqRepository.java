package com.Backend.springBootApplication.repository;

import com.Backend.springBootApplication.model.faq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface faqRepository extends JpaRepository<faq, Long> {
    List<faq> findAllByOrderByViewsDesc();
}