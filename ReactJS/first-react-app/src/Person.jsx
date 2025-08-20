import React from 'react';

const Person = () => {
     const person={
    name: 'John',
    age: 30,
    city: 'New York',
    email: 'john@example.com'
  }
  console.log('Person object:', person);
  const product={
    id: 1,
    name: 'Laptop',
    price: 999.99
  }
  return (
    <>
       <div>
      <h1>Welcome to My First React App</h1>
      <h2>Person Details:</h2>

      <ul>
        <li>Name: {person.name}</li>
        <li>Age: {person.age}</li>
        <li>City: {person.city}</li>
        <li>Email: {person.email}</li>
      </ul>
    </div>
    <div>
      <h2>Product Details:</h2>
      <ul>
        <li>ID: {product.id}</li>
        <li>Name: {product.name}</li>
        <li>Price: ${product.price}</li>
      </ul>
    </div>
    </>
  );
}

export default Person;
