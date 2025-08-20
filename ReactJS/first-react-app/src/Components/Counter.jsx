import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);


// let count = 0;

  const increment = () => {
    // count++;
    setCount(count + 1);
    console.log(`Count incremented: ${count}`);
  };

  const decrement = () => {
    // count--;
    setCount(count - 1);
    console.log(`Count decremented: ${count}`);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
