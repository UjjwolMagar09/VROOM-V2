import React from 'react';
import '../assets/styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
  
        <div className="policy-section">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy governs the manner in which VROOM Car Rental collects, uses, maintains, and discloses information collected from users of our website.
          </p>
        </div>
  
        <div className="policy-section">
          <h2>Information We Collect</h2>
          <p>
            We may collect the following types of personal information:
          </p>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Booking and transaction details</li>
            <li>Location information (if provided by the user)</li>
            <li>Device and browser information</li>
            <li>Usage data (pages visited, interactions)</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>How We Use Your Information</h2>
          <p>
            We use the collected information for the following purposes:
          </p>
          <ul>
            <li>Process bookings and payments</li>
            <li>Improve our services and website</li>
            <li>Communicate with users (notifications, updates)</li>
            <li>Personalize user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>Information Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent users' personal information to others. However, we may share information with trusted third parties for specific purposes (e.g., payment processing, analytics).
          </p>
        </div>
  
        <div className="policy-section">
          <h2>Data Security</h2>
          <p>
            We implement security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
          </p>
        </div>
  
        <div className="policy-section">
          <h2>Your Rights</h2>
          <p>
            Users have the right to access, update, or delete their personal information. Contact us if you want to exercise these rights.
          </p>
        </div>
  
        <div className="policy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We reserve the right to update or change our Privacy Policy. Any changes will be posted on this page.
          </p>
        </div>
  
      </div>
    );
  };
  
  export default PrivacyPolicy;