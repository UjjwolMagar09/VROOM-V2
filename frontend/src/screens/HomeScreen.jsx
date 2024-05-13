import React, { useState } from 'react';
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import SimpleCarousel from '../components/Carousel'
import Message from '../components/Message'
import SortingComponent from '../components/Sorting';
import { useGetProductsQuery } from '../slices/productApiSlice'



const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSort = (sortOrder) => {
    const sorted = [...products].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedProducts(sorted);
  };
  return (
    <>
    <SortingComponent handleSort={handleSort} />
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error.data?.message || error.error}</Message>
    ) : (<><h1>Our Services</h1>
    <Row>
  { sortedProducts.map((product) => (
    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
      <Product product={product} />
    </Col> 
  ))}
</Row></>) }

      <SimpleCarousel/>
      
    </>
  )
}

export default HomeScreen
