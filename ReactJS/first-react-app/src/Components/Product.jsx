import React from 'react';

function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Brand: {props.brand}</p>
      <p>Price: ${props.price}</p>
    </div>
  );
}

export default Product;
