import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import First from './First.png';



const SimpleCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={First}
          alt="Car"
        />
        <Carousel.Caption>
          <h3>Experience the best</h3>
          <p>Rent the most finest Car for your journey</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={First}
          alt="Car"
        />
        <Carousel.Caption>
          <h3>Wanna Rent a Ride</h3>
          <p>Rent your ride on Vroom_Car_Rental</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={First}
          alt="Car"
        />
        <Carousel.Caption>
          <h3>A vaccation</h3>
          <p>We have got Everything form jeeps to Cars Anything you wanna rent for your journey</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SimpleCarousel;
