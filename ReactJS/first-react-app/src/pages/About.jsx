import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/product');
  }
  const gotoHome = () => {
    navigate('/');
  } 
  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h2>About</h2>
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
      <button onClick={handleNavigation}>Go to Product List</button>
      <button onClick={gotoHome}>Go to Home</button>
      <button onClick={handleBack}>Go Back</button>
      </div>
    </div>
  )
}

export default About