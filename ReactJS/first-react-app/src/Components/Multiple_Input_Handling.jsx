import React, { useState } from 'react'

const Multiple_Input_Handling = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        address: '',
        city: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            age: '',
            address: '',
            city: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <>
    <div>Multiple Input Handling</div>
    <div>
        <h1>Registration Form</h1>
    </div>
    <form onSubmit={submitHandler}>
      <input type="text" value={formData.name} name="name" onChange={handleChange} placeholder="Name" />
      <input type="email" value={formData.email} name="email" onChange={handleChange} placeholder="Email" />
      <input type="number" value={formData.age} name="age" onChange={handleChange} placeholder="Age" />
      <input type="text" value={formData.address} name="address" onChange={handleChange} placeholder="Address" />
      <input type="text" value={formData.city} name="city" onChange={handleChange} placeholder="City" />
      <input type="password" value={formData.password} name="password" onChange={handleChange} placeholder="Password" />
      <input type="password" value={formData.confirmPassword} name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" />
      <button type="submit">Submit</button>
    </form>
    </>
    
  )
}

export default Multiple_Input_Handling