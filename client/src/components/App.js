import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(()=>{
    fetchProductsList();
  },[]);

  const fetchProductsList = async () => {
    try {
      const resData = await fetch('http://localhost:3001/products');
      const data = await resData.json();
      setProductList(JSON.parse(data));
    } catch(err) {
      console.log(err)
    }
  };

  const fetchProductInfo = async (query) => {
    try {
      const resData = await fetch(`http://localhost:3001/products/${query}`);
      const data = await resData.json();
      setProductDetails(data);
    } catch(err) {
      console.log(err);
    } 
  };

  return (
    <Wrapper>
      <ProductList product={productList} fetchProductInfo={fetchProductInfo} />
      <ProductDetails productDetails={productDetails} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 80%;
  margin: 5rem auto;
  padding: 2rem 3rem;
  border-radius: 5px;
  background-color: #F71735;

  display: flex;
  justify-content: space-evenly;
  align-content: center;
`
