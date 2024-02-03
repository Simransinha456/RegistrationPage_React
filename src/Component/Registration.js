import React, { useState } from 'react';
import './Registration.css';

function Registration() {
    const [data, setData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', data);
        // You can perform further actions here, such as sending the data to a server

        // Clear the form fields after submission
        setData({
            username: '',
            email: '',
            phone: '',
            password: ''
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1> Registration Form</h1>
                <div>
                    <label htmlFor="username">Fullname</label>
                    <input type="text" autoComplete="off" name="username" id="username" value={data.username} onChange={handleInput} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" autoComplete="off" name="email" id="email" value={data.email} onChange={handleInput} />
                </div>

                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" autoComplete="off" name="phone" id="phone" value={data.phone} onChange={handleInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" autoComplete="off" name="password" id="password" value={data.password} onChange={handleInput} />
                </div>

                <button type="submit">Registration</button>
            </form>
        </>
    );
}

export default Registration;
