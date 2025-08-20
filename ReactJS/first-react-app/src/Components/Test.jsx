import React from 'react'

export const Test = () => {
  return (
    <>
      <div>
        <h1>Difference Between rafc and rafce</h1>
        <h2>rafc (React Arrow Function Component)</h2>
        <p>rafc is a shortcut for creating a functional component in React using an arrow function.</p>
        <p>It usually looks like this:</p>
        <pre>
{`const MyComponent = () => {
  return <div>Hello World</div>;
}

export default MyComponent;`}
        </pre>
        <h2>rafce (React Arrow Function Component with Export)</h2>
        <p>rafce is similar to rafc, but it also includes an export statement for the component.</p>
        <p>It usually looks like this:</p>
        <pre>
{`const MyComponent = () => {
  return <div>Hello World</div>;
}

export default MyComponent;`}
        </pre>
        <h3>Example:</h3>
        <pre>
{`// rafc
const Example = () => {
  return <div>rafc Example</div>;
}
export default Example;

// rafce
const Example = () => {
  return <div>rafce Example</div>;
}
export default Example;
`}
        </pre>
      </div>
    </>
  )
}
