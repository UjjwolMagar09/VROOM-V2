import React from 'react';
import Jeep from './Jeep.png';
import CarGrid from './Car_Grid';
import SimpleCarousel from './Basic_Slider';

const Header = () => {
  return (
    <header>
      <h1>Vroom Car Rental</h1>
      <nav>
        <ul>
          <li>What's new</li>
          <li>Become a distributor</li>
          <li>Offers</li>
        </ul>
      </nav>
    </header>
  );
};

const TruckImage = () => {
  return (
    <div className="truck-image">
       <img
        src={Jeep}
        alt="jeep"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} My Car Website. All rights reserved.
      </p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <TruckImage />
      <CarGrid />
      <SimpleCarousel/>
      <Footer />
    </div>
  );
};

export default App;