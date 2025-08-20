import React from 'react';

function ShowProduct() {
    let products=()=>[
        { id:1,title:"i phone",price:1000 },
        { id:2,title:"samsung",price:800 },
        { id:3,title:"one plus",price:600 },
        { id:4,title:"xiaomi",price:400 }
    ]
  return (
    <div>
      {products().map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowProduct;
