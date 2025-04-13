import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 style={{color:"#09101b"}}>Contact Us</h1>
        <p>We're here to help you with your health journey</p>
      </div>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Email:</strong> support@healthmentor.com</p>
          <p><strong>Address:</strong> NIT Patna Campus, Ashok Rajpath, Patna, Bihar</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;