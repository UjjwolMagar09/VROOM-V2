import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles/ContactUs.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_d8aeo07', 'template_3aojwck', e.target, 'pGYjMdg3Itu5o7AVs')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or assistance.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contactus;
