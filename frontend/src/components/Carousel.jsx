import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from '../assets/SUV.png';
import Second from '../assets/SUV2.png';
import Third from '../assets/SUV3.png';

const SimpleCarousel = () => {
  return (
    <>
      <style>{`
             
        .carousel-control-prev-icon,
        .carousel-control-next-icon
        {
         filter: invert(100%); 
        }
      
        carousel-control-prev,
        .carousel-control-next
        {
         color: black; /* Set the color to black */
        }
      
        .carousel-caption 
        {
          position: absolute;
          bottom: 20px; 
          left: 50%;
          transform: translateX(-50%);
          padding: 20px;
          border-radius: 10px;
          color: white;
          width: 50%; 
        }

        .carousel-caption h3
        {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .carousel-caption p 
        {
          font-size: 18px; 
        }

        .carousel-inner img 
        {
          max-height: 600px; 
          max-width: 800px;  ;
          margin: auto;
        }
      `}</style>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={First}
            alt="Car"
            loading="lazy"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Experience the best</h3>
            <p>Rent the finest car for your journey</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Second}
            alt="Car"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Wanna Rent a Ride</h3>
            <p>Rent your ride on Vroom_Car_Rental</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Third}
            alt="Car"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>A vacation</h3>
            <p>We have everything from jeeps to cars. Anything you want to rent for your journey.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SimpleCarousel;
