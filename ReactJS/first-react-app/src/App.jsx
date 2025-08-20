import React from 'react';
import Person from './Person';
import Cat from './Cat';
import { Test } from './Components/Test';
import Product from './Components/Product';
import DriveValidation from './Components/DriveValidation';
import Laptop from './Components/Laptop';

const App = () => {
  console.log('App component rendered');
 
  return (
    <>
    <div>
    {/* <h1>App is Entry Point</h1>
      <Person />
      <Cat /> */}
{/* <Test /> */}
</div>
<div>

{/* <h1>Reusable components using props</h1>
    <Product name="Laptop" brand="Dell" price={999} />
    <Product name="Smartphone" brand="Apple" price={799} />
    <Product name="Tablet" brand="Samsung" price={499} /> */}
</div>
<div>
    {/* <DriveValidation name="John Doe" age={20} pan={true} />
    <DriveValidation name="Jane Smith" age={17} pan={false} />
    <DriveValidation name="Alice Johnson" age={22} pan={true} /> */}
</div>

<div>
  <Laptop brand="Dell" model="XPS 13" price={999} />
  <Laptop brand="Apple" model="MacBook Pro" price={1999} />
  <Laptop brand="HP" model="Spectre x360" price={1299} />
</div>

    </>
  );
}

export default App;
