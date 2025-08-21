import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  // dynamic nav bar
  const [isLogin, setisLogin] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setisLogin(true);
    navigate('/dashboard');

  };
  const handleLogout = () => {
    setisLogin(false);
    navigate('/');
  };
  return (
    <>
      {/* <div>NavBar</div> */}
      <div className='navbar'>
        <div className='left item'>MyApp</div>
        <div className='right'>
          {isLogin ? 
          <>
          <Link className='item' to="/">Home</Link>
          <Link className='item' to="/meal">Meal</Link>
          <Link className='item' to="/dashboard">Dashboard</Link>
          <Link className='item' to="/team">Team</Link>
          <Link className='item' to="/product">Product</Link>
  
          <button className='item' onClick={handleLogout}>Logout</button>
          </> : 
          <>
                  <Link className='item' to="/about">About</Link>
          <Link className='item' to="/contacts">Contacts</Link>
          <button className='item' onClick={handleLogin}>Login</button>
          </>}

          
        </div>
      </div>
    </>
  );
}

export default NavBar