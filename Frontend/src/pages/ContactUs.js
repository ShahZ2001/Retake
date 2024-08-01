import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styling/ContactUs.css';

function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    errors: {},
    faqs: [],
    submissionMessage: '' // New state property for submission message
  });

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/faqs');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const faqs = await response.json();
        setState(prevState => ({ ...prevState, faqs }));
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFAQs();
  }, []);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!state.name.trim()) newErrors.name = 'Name is required.';
    if (!state.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(state.email)) newErrors.email = 'Email is invalid.';
    if (!state.message.trim()) newErrors.message = 'Message is required.';

    setState(prevState => ({ ...prevState, errors: newErrors }));
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState(prevState => ({ ...prevState, submissionMessage: '' })); // Reset submission message

    if (!validateForm()) {
      setState(prevState => ({
        ...prevState,
        submissionMessage: 'Form not submitted due to invalid or inappropriate inputs'
      }));
      return;
    }

    const formData = {
      name: state.name,
      email: state.email,
      message: state.message,
    };

    try {
      const response = await fetch('http://localhost:8080/api/contact-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setState(prevState => ({
          ...prevState,
          submissionMessage: 'Form not submitted due to invalid or inappropriate inputs'
        }));
      } else {
        console.log("Form submitted successfully");
        setState(prevState => ({
          ...prevState,
          name: '',
          email: '',
          message: '',
          faqs: [...prevState.faqs, { question: formData.message, answer: "Pending response" }],
          errors: {} // Clear any errors
        }));
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      setState(prevState => ({
        ...prevState,
        submissionMessage: 'Form not submitted due to invalid or inappropriate inputs'
      }));
    }
  };

  const { errors, faqs, submissionMessage } = state;

  return (
    <div>
      <Header />
      <h2>Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={state.name} onChange={handleChange} /><br />
        <div className="error">{errors.name}</div>

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={state.email} onChange={handleChange} /><br />
        <div className="error">{errors.email}</div>

        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" value={state.message} onChange={handleChange}></textarea><br />
        <div className="error">{errors.message}</div>

        <input type="submit" value="Submit" />
        {submissionMessage && <div className="submission-message">{submissionMessage}</div>}
      </form>

      <h2>FAQ</h2>
      <div className="FAQ">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactForm;
