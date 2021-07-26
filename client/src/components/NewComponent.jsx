import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
// Accepts user input
// Submit user input into database and redirect to home page
// Add a link back to home
// Add a cancel button goes back home
const NewComponent = props => {
    const [form, setForm] = useState("");
    const [valid, setValid] = useState({})

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", {'firstName': form.firstName, 'lastName': form.lastName})
            .then(res => navigate('/'))
            .catch(err => {
                console.log('err: ',err);
                const {errors} = err.response.data;
                let errorObj = {};
                for (let [key, value] of Object.entries(errors)) {
                    errorObj[key] = value.message;
                }
                setValid(errorObj)
            })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={handleSubmit}>
                <div style={{margin: 10 +'px'}}>
                    <label style={{margin: 3 +'px'}} htmlFor="firstName">First Name:</label>
                    <input style={{margin: 3 +'px'}} type="text" name="firstName" onChange={handleChange} />
                    {(valid.firstName) ? <p>{valid.firstName}</p> : null}
                    <label style={{margin: 3 +'px'}} htmlFor="lastName">Last Name:</label>
                    <input style={{margin: 3 +'px'}} type="text" name="lastName" onChange={handleChange} />
                    {(valid.lastName) ? <p>{valid.lastName}</p> : null}
                </div>
                <div style={{margin: 10 +'px'}}>
                    <Link style={{margin: 3 +'px'}} to="/">Cancel</Link>
                    <button style={{margin: 3 +'px'}} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default NewComponent;