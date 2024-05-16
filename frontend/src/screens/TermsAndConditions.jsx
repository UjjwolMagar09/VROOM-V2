import React, { useState } from 'react';
import '../assets/styles/TermsAndConditions.css';

const TermsAndConditions = () => {
  


  return (
    <div className="terms-and-conditions">
      <h1 className="page-title">Terms and Conditions</h1>

      <div className="content">
        <section>
          <h2>Introduction</h2>
          <p>Welcome to Vroom Car Rental's terms and conditions. Please read these terms carefully before using our services.</p>
          <p>By accessing or using our website, you agree to comply with these terms and conditions.</p>
        </section>

    
        <section>
        <h2>Service</h2>
        <p>We provide car rental services for our customers. Our services include a wide range of vehicles available for short-term and long-term rentals. Our goal is to offer convenient and reliable transportation solutions.</p>
      </section>

      <section>
        <h2>Booking and Rental</h2>
        <p>Customers can book vehicles online through our website or by contacting our customer service. Rental durations are flexible, ranging from daily rentals to monthly contracts. Customers can choose pickup and drop-off locations based on their convenience.</p>
      </section>

      <section>
        <h2>Payment and Fees</h2>
        <p>We accept various payment methods, including online payments or cash in hand. Pricing is based on vehicle type, rental duration, and additional services. Additional fees may apply for insurance coverage, fuel charges, and late returns. Cancellation policies allow customers to cancel bookings with specified notice.</p>
      </section>

      <section>
        <h2>Responsibilities</h2>
        <p>During the rental period, customers are responsible for the proper care of the vehicle. This includes adhering to traffic regulations, avoiding damage to the vehicle, and reporting accidents or issues promptly. Customers should inform us of any issues or concerns related to the rental.</p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>Our company is not liable for any accidents, damages, or losses incurred during the rental period, except as covered by our insurance policies. Customers are responsible for any violations of traffic laws or misuse of the rented vehicle.</p>
      </section>

      <section>
        <h2>Data Protection</h2>
        <p>We collect and use customer information for booking and service purposes only. Personal data is handled in accordance with data protection regulations to ensure privacy and security.</p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>For inquiries, assistance, or feedback regarding our terms and services, please contact our customer support team at support@vroomcarrental.com or call us at 9818681224.</p>
      </section>


 
        
      </div>
    </div>

  );
};

export default TermsAndConditions;
