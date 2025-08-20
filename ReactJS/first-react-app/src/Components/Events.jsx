import React from 'react';

function Events() {
    const handleEvent=()=>{
alert('Event triggered! form handle event function...');
    }
    const add = (a, b) => {
        alert(`Addition: ${a + b}`);
    }
  return (
    <div>
        <h1> we are learning Event handling.</h1>
      <button onClick={() => alert('Button clicked! Event handling in React is fun!')}>Click Me</button>

      <button onClick={handleEvent}>click me</button>
      <p>Call back for passing paramiters in onclick</p>
        <button onClick={() => add(10,20)}>Addition or 10, 20</button>

    </div>
  );
}

export default Events;
