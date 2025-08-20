import React from 'react';
import Person from './Person';
import Cat from './Cat';
import { Test } from './Components/Test';
import Product from './Components/Product';

const App = () => {
  console.log('App component rendered');
 
  return (
    <>
    <div>
    {/* <h1>App is Entry Point</h1>
      <Person />
      <Cat /> */}
{/* <Test /> */}

<h1>Reusable components using props</h1>
    <Product name="Laptop" brand="Dell" price={999} />
    <Product name="Smartphone" brand="Apple" price={799} />
    <Product name="Tablet" brand="Samsung" price={499} />
    </div>
    </>
  );
}

export default App;
