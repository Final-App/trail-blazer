import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Axios from 'axios';
import AlertBox from './AlertBox'

const LoginForm = props => {
    const { setIsAuth } = useContext(AuthContext)
    const emptyCreds = { email: '', password: '' }
    const errorMessage = ['Login credentials are invalid.']
    const [formData, setFormData] = useState(emptyCreds)
    const [credsAreInvalid, setCredsAreInvalid] = useState([])

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

    function renderErrors(){
        if(credsAreInvalid.length > 0){
            return <AlertBox messages={errorMessage} type="error" />
        }else{
            return null
        }
    }

    return (
        <div>

        {renderErrors()}

        <form onSubmit={handleFormSubmit}>
            <label>Email address</label>
            <input name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
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
    </div>
    )
}

export default LoginForm;