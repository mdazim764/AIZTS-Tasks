import React from 'react';
import './Laptop.css'; // Assuming you have a CSS file for styling

function Laptop({brand, model, price}) {
const laptopStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '16px',
    margin: '16px 0',
    borderColor: '#b23a3a',
    boxShadow: '0 2px 4px rgba(133, 7, 7, 0.1)',
  };

  return (
    <div
    // inline css
    //   style={{
    //     border: '1px solid #ccc',
    //     borderRadius: '5px',
    //     padding: '16px',
    //     margin: '16px 0',
    //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    //   }}

    // internal css
    // style={laptopStyle}
    className='laptop'
    >
      <h2>{brand} Laptop</h2>
      <p>Model: {model}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Laptop;
