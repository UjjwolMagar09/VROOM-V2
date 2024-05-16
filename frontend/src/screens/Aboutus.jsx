import React from 'react';

const divStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'left',
};

const headingStyle = {
  color: '#333',
  fontSize: '2em',
};

const paragraphStyle = {
  marginBottom: '15px',
  lineHeight: '1.5',
};

const AboutUs = () => {
  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <div>
        <p style={paragraphStyle}>Welcome to Vroom Car Rental, your trusted partner in car rentals.</p>
        <p style={paragraphStyle}>At Vroom Car Rental, we believe in providing convenient, reliable, and affordable car rental services to our customers.</p>
        <p style={paragraphStyle}>Our journey began in 2024 with a simple mission.</p>
        <p style={paragraphStyle}>With years of experience and dedication, we have grown to become a leading name in the car rental industry, offering a wide range of vehicles to suit every need.</p>
        <p style={paragraphStyle}>Whether you're planning a family vacation, a business trip, or simply need a temporary vehicle solution, Vroom Car Rental has you covered.</p>
        <ul style={paragraphStyle}>
          <li>Wide selection of vehicles.</li>
          <li>Competitive pricing and flexible rental options.</li>
          <li>Convenient locations and easy pickup/drop-off services.</li>
          <li>24/7 customer support to assist you with any queries or concerns.</li>
        </ul>
        <p style={paragraphStyle}>Thank you for choosing Vroom Car Rental. We look forward to serving you and making your journey a memorable one.</p>
      </div>
    </div>
  );
};

export default AboutUs;
