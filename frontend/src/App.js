import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TestimonialSlider from './components/TestimonialSlider';
import Contactus from './screens/Contactus';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/contact" element={<Contactus />} />
            {/* Add more routes here */}
          </Routes>
          <Outlet/>
          <TestimonialSlider />
        </Container>
      </main>
      <Footer />
      
    </>
  );
};

export default App;
