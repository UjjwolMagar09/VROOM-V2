import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import SimpleCarousel from '../components/Carousel';
import SortingComponent from '../components/Sorting';
import { useGetProductsQuery } from '../slices/productApiSlice';
import SUV from '../assets/SUV4.png'; 
import TestimonialSlider from '../components/TestimonialSlider'

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setSortedProducts(products);
    }
  }, [products]);

  const handleSort = (sortOrder) => {
    const sorted = [...products].sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setSortedProducts(sorted);
  };

  return (
    <>
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error.data?.message || error.error}</Message>
    ) : (<><h1>Our Services</h1>
      <Row>
        { products.map((product) =>(
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col> 
        ))}
      </Row></>) }
      <TestimonialSlider/>
      <Container fluid className="p-3">
        <img
          src={SUV}
          alt="jeep"
          style={{ width: '100%', height: 'auto', maxHeight: '600px' }}
        />
      </Container>
      <Container>
        <div> {}
          <SortingComponent handleSort={handleSort} />
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error.data?.message || error.error}</Message>
        ) : (
          <>
            <h1>Our Services</h1>
            <Row>
              {sortedProducts.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
        <SimpleCarousel />
      </Container>
    </>
  );
};

export default HomeScreen


