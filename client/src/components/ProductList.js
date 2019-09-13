import React from 'react';
import styled from 'styled-components';

const ProductList = ({ product, fetchProductInfo }) => {
  return(
    <Wrapper>
      <Header>Product List</Header>
        <ul>
          { product && product.map(product => {
            return <ListItem key={product._id} onClick={() => fetchProductInfo(product.title)}>{product.title}</ListItem>
          })}
        </ul>
    </Wrapper>
  );
};

export default ProductList;

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
const ListItem = styled.li`
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background-color: #FF9F1C;
`