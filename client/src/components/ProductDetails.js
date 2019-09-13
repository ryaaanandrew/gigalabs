import React from 'react';
import styled from 'styled-components';

const ProductDetails = ({ productDetails }) => {

  return(
    <Wrapper>
      { productDetails.length === 0 ? <Header>Please select a product</Header> : <Header>ProductDetails</Header>}
    </Wrapper>
  )
};  

export default ProductDetails;

const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  width: 40%;
  text-align: center;
`
const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: white;
`