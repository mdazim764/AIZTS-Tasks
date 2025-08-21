import React, { useState } from 'react'

const Form = () => {
    const formstyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#140343',
        padding: '1em',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    const labelStyle = {
        marginBottom: '12px',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        input: {
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginTop: '4px',
        },

    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (!name || !email || !age || !password || !confirmPassword) {
            alert('Please fill in all fields!');
            return;
        }
        console.log({ name, email, age, password, confirmPassword });
        alert('Form submitted successfully!' + JSON.stringify({ name, email, age, password, confirmPassword }));
        // Reset form fields
        setName('');
        setEmail('');
        setAge('');
        setPassword('');
        setConfirmPassword('');

    };

    return (
        <div>
            <h1>Form</h1>
            <form style={formstyle} onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    Name:
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label style={labelStyle}>
                    Email:
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label style={labelStyle}>
                    Age:
                    <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <label style={labelStyle}>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label style={labelStyle}>
                    Confirm Password:
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <button type="submit" style={{ marginTop: '12px', padding: '8px', border: 'none', borderRadius: '4px', backgroundColor: '#61dafb', color: '#fff', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  )
}

export default Form