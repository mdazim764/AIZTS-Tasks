import React from 'react';
import { useEffect, useState } from 'react';

function Fetch_Data_from_Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const result = await response.json();
      setData(result);
        console.log('Data fetched:', result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Data from API</h1>
        {/* <p>Data fetched from the API will be displayed below:</p> */}
      {/* {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )} */}
      <p>fetched data in good styling.</p>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Fetch_Data_from_Api;
