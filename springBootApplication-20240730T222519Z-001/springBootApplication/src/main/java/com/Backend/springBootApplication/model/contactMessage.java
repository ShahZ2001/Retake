package com.Backend.springBootApplication.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ContactMessage")
public class contactMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Long id;

    private String name;

    @Column(nullable = false)
    private String email;

    @Column(length = 1000)
    private String message;

    // Standard constructors, getters, and setters
    public contactMessage() {
        
    }

    public contactMessage(String name, String email, String message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    

    // Getters 
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getMessage() {
        return message;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
