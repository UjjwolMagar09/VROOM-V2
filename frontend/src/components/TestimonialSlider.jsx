import React, { useState } from 'react';
import '../assets/styles/TestimonialSlider.css';

const teamMembers = [
  {
    id: 1,
    name: 'Leeja Shrestha',
    role: 'Project Manager',
    number: '+1234567890',
    email: 'Leeja@gmail.com',
    photo: '../images/leeja.jpg', 
  },
  {
    id: 2,
    name: 'Sirish Tuladhar',
    role: 'Business Analyst',
    number: '+9876543210',
    email: 'Sirish@gmail.com',
    photo: '../images/car2.jpg',
  },
  {
    id: 3,
    name: 'Ujjwol Magar',
    role: 'Developer',
    number: '+9876543210',
    email: 'Ujjwol@gmail.com',
    photo: '../images/car3.jpg',
  },
  {
    id: 4,
    name: 'Ragendra Maharjan',
    role: 'Developer',
    number: '+9876543210',
    email: 'Ragendra@gmail.com',
    photo: '../images/ragen.jpg',
  },
  {
    id: 5,
    name: 'Pralad Gurung',
    role: 'Developer',
    number: '+9876543210',
    email: 'Pralad@gmail.com',
    photo: '../images/car5.jpg',
  },
  {
    id: 6,
    name: 'Prince Shrestha',
    role: 'Developer',
    number: '+9876543210',
    email: 'Prince@gmail.com',
    photo: '../images/car6.jpg',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 >= teamMembers.length ? 0 : prevIndex + 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 < 0 ? teamMembers.length - 2 : prevIndex - 2));
  };

  return (
    <div className="testimonial-slider">
      <h2 className="team-header">The Team</h2>
      <div className="navigation prev" onClick={handlePrev}>
        &#8249;
      </div>
      <div className="testimonial-cards-container">
        {[currentIndex, currentIndex + 1].map((index) => (
          <div key={teamMembers[index].id} className="testimonial-details-horizontal">
            <div className="testimonial-photo">
              <img src={teamMembers[index].photo} alt={teamMembers[index].name} />
            </div>
            <div className="testimonial-info">
              <h3>Name: {teamMembers[index].name}</h3>
              <p>Role: {teamMembers[index].role}</p>
              <p>Number: {teamMembers[index].number}</p>
              <p>Email: {teamMembers[index].email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation next" onClick={handleNext}>
        &#8250;
      </div>
    </div>
  );
};

export default TestimonialSlider;