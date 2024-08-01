package com.Backend.springBootApplication.model;

import jakarta.persistence.*;

@Entity
@Table(name = "faqs")
public class faq {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String question;

    @Column(length = 5000)
    private String answer;
    
    @Column(nullable = false)
    private int views = 0;  // Field to keep track of the number of views


    // getters, and setters
    public faq() {}

    public faq(String question, String answer) {
        this.question = question;
        this.answer = answer;
    }
    public Long getId() {
        return id;
    }
    public String getQuestion() {
        return question;
    }
    public String getAnswer() {
        return answer;
    }
    public int getViews() {
        return views;
    }
    public void incrementViewCount() {
        this.views++;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setQuestion(String question) {
        this.question = question;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
    public void setViews(int views) {
        this.views = views;
    }

    public void incrementViews() {
        this.views++;
    }
    //String method for debugging purposes
    @Override
    public String toString() {
        return "FAQ{" +
                "id=" + id +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                 ", views=" + views +
                '}';
    }

    
}


