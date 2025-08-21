import React from 'react'
import StateGov from './StateGov'
// import MoneyContext from '../context/MoneyContext';
// import { useContext } from 'react';

const IndianGov = ({money}) => {

  return (
    <div>
      <h1>This us Indian Gov Component</h1>
      <StateGov money={money} />
    </div>
  );
}

export default IndianGov