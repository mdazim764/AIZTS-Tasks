import React from 'react';
import Person from './Person';
import Cat from './Cat';
import { Test } from './Components/Test';
// import Product from './Components/Product';
import DriveValidation from './Components/DriveValidation';
import Laptop from './Components/Laptop';
import Events from './Components/Events';
import Counter from './Components/Counter';
import ShowProduct from './Components/ShowProduct';
import FilterProduct from './Components/FilterProduct';
import UseEffectExample from './Components/UseEffectEx';
import Fetch_Data_from_Api from './Components/Fetch_Data_from_Api';
import Form from './Components/Form';
import Multiple_Input_Handling from './Components/Multiple_Input_Handling';
import Meal from './Food_Recipe/Meal';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Team from './pages/Team';
import Product from './pages/product';
import Product_Details from './pages/Product_Details';
import NavBar from './Components/NavBar';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import IndianGov from './Home/IndianGov'
import MoneyContext from './context/MoneyContext';
const App = () => {
  console.log('App component rendered');
  const money = 1000;
 
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
  {/* <Laptop brand="Dell" model="XPS 13" price={999} />
  <Laptop brand="Apple" model="MacBook Pro" price={1999} />
  <Laptop brand="HP" model="Spectre x360" price={1299} /> */}
</div>

<div>
  {/* <Events /> */}
</div>

<div>
  {/* <Counter /> */}
</div>

<div>
  {/* <ShowProduct /> */}
</div>

<div>
  {/* <FilterProduct /> */}
</div>

<div>
  {/* <UseEffectExample /> */}
</div>

<div>
  {/* <Fetch_Data_from_Api /> */}
</div>

<div>
  {/* <Form /> */}
</div>

<div>
  {/* <Multiple_Input_Handling /> */}
</div>
<div>
  {/* <Meal /> */}
</div>
<MoneyContext.Provider value={money}>
<Router>
<NavBar />
  <Routes>
    
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/" element={<IndianGov money={money} />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/team" element={<Team />} />
    <Route path="/product" element={<Product />} />
    <Route path="/meal" element={<Meal />} />
    <Route path="/product/:id" element={<Product_Details />} />
    <Route path="/dashboard" element={<Dashboard />} />
    {/* Add more routes as needed */}
   
  </Routes>
</Router>
 </MoneyContext.Provider>

    </>
  );
}

export default App;
