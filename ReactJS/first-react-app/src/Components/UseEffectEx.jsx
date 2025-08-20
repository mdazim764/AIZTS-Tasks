import React from 'react';
import { useEffect,useState } from 'react';

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
 console.log(`Count: ${count}`);
    // This effect runs after every render
 document.title = `Count: ${count}`;
  }, [count]); // Empty dependency array means this effect runs once

  return (
    <div>
      <h1>useEffect Hook Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <p>Theory of useEffect hook in React: The useEffect hook allows you to perform side effects in function components. It runs after the component renders and can be used for tasks like data fetching, subscriptions, or manually changing the DOM.</p>
    </div>
  );
}

export default UseEffectExample;
