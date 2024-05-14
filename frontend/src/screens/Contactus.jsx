import React, { useState } from 'react';
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
    // Handle form submission logic 
    console.log('Form submitted:', formData);
    // Clear form fields after submission 
    setFormData({ name: '', email: '', phone: '', message: '' });
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
