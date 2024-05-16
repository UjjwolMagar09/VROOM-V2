import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      question: 'Question 1: What documents do I need to rent a car?',
      answer:
        'Typically you will need a valid drivers license, a credit card in your name for payment and security purposes, and sometimes additional identification like a passport or national ID card if renting internationally.',
    },
    {
      question: 'Question 2: Can I rent a car if I`m under 25 years old?',
      answer:
        'Many car rental companies have age restrictions, often requiring renters to be at least 21 or 25 years old. Some companies may allow younger drivers but with additional fees or restrictions.',
    },
    {
      question: 'Question 3: What insurance options are available for rental cars?',
      answer:
        'Car rental companies typically offer several insurance options, including collision damage waiver (CDW), liability coverage, and personal accident insurance. It`s essential to understand each option`s coverage and any exclusions before renting.',
    },
    {
      question: 'Question 4: How are rental rates calculated?',
      answer:
        'Rental rates are usually based on factors like the type of car, rental duration, location, and additional services like insurance or GPS rental. Rates can vary based on demand and availability.',
    },
    {
      question: 'Question 5: Can I return the car to a different location?',
      answer:
        'Some car rental companies allow one-way rentals, where you can pick up the car at one location and return it to another. However, this often incurs an additional fee, so it`s essential to check with the rental company beforehand.',
    }
  ];

  return (
    <div className="wrapper">
         <style>
        {`
          .wrapper {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
          }
          .accordion {
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .item {
            border-bottom: 1px solid #ccc;
            padding: 10px;
            cursor: pointer;
          }
          .item:last-child {
            border-bottom: none;
          }
          .title h2 {
            display: inline-block;
            margin: 0;
            font-size: 16px; /* Smaller font size for questions */
          }
          .title span {
            float: right;
            font-size: 24px;
          }
          .content {
            padding: 10px 0;
            display: none;
            font-size: 14px; /* Smaller font size for answers */
          }
          .item.active .content {
            display: block;
          }
        `}
      </style>
      <h1>FAQ</h1>
      <div className="accordion">
        {data.map((item, index) => (
          <div className={`item ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => toggleItem(index)}>
            <div className="title">
              <h2>{item.question}</h2>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className="content">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;