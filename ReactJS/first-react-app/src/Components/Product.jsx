import React from 'react';

function Product({name, brand, price}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Brand: {brand}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;
