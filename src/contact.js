import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="contact-wrapper"
      initial={{ opacity: 0, y: 40 }}       
      animate={{ opacity: 1, y: 0 }}        
      transition={{ duration: 0.8, ease: 'easeOut' }} 
    >
      <main>
        <section>
          <h2>Get in Touch</h2>
          <p>📍 Address: 123 Taste Street, Paris, France</p>
          <p>📞 Phone: +33 1 23 45 67 89</p>
          <p>📧 Email: contact@ourrestaurant.com</p>
          <p>🕒 We are open:</p>
          <p>Monday to Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday: 10:00 AM - 1:00 AM</p>
          <p>Sunday: 10:00 AM - 11:00 PM</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </motion.div>
  );
};

export default Contact;
