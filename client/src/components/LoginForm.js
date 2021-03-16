import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Axios from 'axios';

const LoginForm = props => {
    const { setIsAuth } = useContext(AuthContext)
    const emptyCreds = { email: '', password: '' }
    const errorMessage = 'invalid credentials'
    const [formData, setFormData] = useState(emptyCreds)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')

    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const inputCreds = {
            email: formData.email,
            password: formData.password
        }
        login(inputCreds)
        setFormData(emptyCreds)
    }

    const login = loginCreds => {
        Axios.post('/login', loginCreds)
            .then(user => {
                console.log("login response ", user)
                setIsAuth(true)
            })
            .catch(err => {
                setCredsAreInvalid(errorMessage)
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>Email address</label>
            <input name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            <div className="text-danger">
                {credsAreInvalid}
            </div>
            <button type="submit">Submit</button>
            <button onClick={e => {
                e.preventDefault();
                props.history.push('/signup')
            }}>Signup</button>
            <button onClick={e => {
                e.preventDefault();
                props.history.push('/')
            }}>Home</button>
        </form>
    )
}

export default LoginForm;