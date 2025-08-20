import React from 'react';

function DriveValidation({name, age, pan}) {
  return (
    <div>
      <h2>Drive Validation</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {age >= 18 ? "Eligible" : "Not Eligible"}</p>
      <p>Note: {age < 18 ? "You must be at least 18 years old to drive." : "You are eligible to drive."}</p>
      <p>it is example of ternery operator</p>

    {pan && <p>You can open a bank account.</p>}
      <p>{pan && <span>Pan Card: {pan ? "Available" : "Not Available"}</span>}</p>
     {pan && <p>it is example of conditional rendering</p>}

    </div>
  );
}

export default DriveValidation;
