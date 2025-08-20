import React from 'react';

function FilterProduct() {
    let products = () => [
        { id: 1, title: "i phone", category:"smartphone", price: 1000 },
        { id: 2, title: "samsung", category:"smartphone", price: 800 },
        { id: 3, title: "one plus", category:"smartphone", price: 600 },
        { id: 4, title: "xiaomi", category:"smartphone", price: 400 },
        { id: 5, title: "macbook", category:"laptop", price: 1200 },
        { id: 6, title: "dell inspiron", category:"laptop", price: 800 },
        { id: 7, title: "hp pavilion", category:"laptop", price: 700 },
        { id: 8, title: "lenovo thinkpad", category:"laptop", price: 900 }
    ];
  return (
    <div>
      <h1>Filter Products by Category</h1>
      <div>
        <h2>Smartphones</h2>
        {products().filter(product => product.category === "smartphone").map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Laptops</h2>
        {products().filter(product => product.category === "laptop").map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterProduct;
