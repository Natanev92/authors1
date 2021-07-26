import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const UpdateComponent = props => {
    const {id} = props;
    console.log('id:', id)

    const [form, setForm] = useState("");
    const [valid, setValid] = useState({})

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => setForm(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/"+id, {'firstName': form.firstName, 'lastName': form.lastName})
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
            <h3>Update Author:</h3>
            <form onSubmit={handleSubmit}>
                <div style={{margin: 10 +'px'}}>
                    <label style={{margin: 3 +'px'}} htmlFor="firstName">First Name:</label>
                    <input style={{margin: 3 +'px'}} type="text" name="firstName" onChange={handleChange} value={form.firstName}/>
                    {(valid.firstName) ? <p>{valid.firstName}</p> : null}
                    <label style={{margin: 3 +'px'}} htmlFor="lastName">Last Name:</label>
                    <input style={{margin: 3 +'px'}} type="text" name="lastName" onChange={handleChange} value={form.lastName} />
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
export default UpdateComponent;