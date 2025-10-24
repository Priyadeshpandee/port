import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    last_name: '',
    from_email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const containerRef = useRef(null);

  // ⭐ Star effect
  useEffect(() => {
    const container = containerRef.current;
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      const size = `${Math.random() * 2 + 1}px`;
      star.style.width = size;
      star.style.height = size;
      container.appendChild(star);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const SERVICE_ID = 'service_ad5ftum';
    const TEMPLATE_ID = 'template_8e1jcwg';
    const PUBLIC_KEY = '8PxWpXwpcRmJtf28K';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ from_name: '', last_name: '', from_email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('Failed to send message. Please try again or email me directly.');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div id="contact" className="contact-page" ref={containerRef}>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Get in Touch</h1>
          <p className="subtitle">I'd like to hear from you!!</p>
          <p className="desc">If you have any inquiries or just want to say hi, please use the contact form!</p>
          <div className="email">
            <FaEnvelope className="icon" />
            <a href="mailto:priyadeshpande637@gmail.com">priyadeshpande637@gmail.com</a>
          </div>
          <div className="phone">
            <FaPhone className="phone-icon" />
            <a href="tel:9075620412">9075620412</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input type="text" name="from_name" placeholder="First Name" value={formData.from_name} onChange={handleChange} required />
            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
          </div>
          <input type="email" name="from_email" placeholder="Email *" value={formData.from_email} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
          <button type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send'}</button>
          {status && <p className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</p>}
        </form>
      </div>
    </div>
  );
}
