import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Axios from 'axios';
import AlertBox from './AlertBox'
import Button from '@material-ui/core/Button';

const LoginForm = props => {
    const { setIsAuth, setCurrentUser } = useContext(AuthContext)
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
                setCurrentUser(user.data)
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
        <h2>Login</h2>
        
        {renderErrors()}

        <form onSubmit={handleFormSubmit}>
            <label>Email address</label>
            <input name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
            <label>Password:</label>
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            <div className="button-area">
                <Button variant="contained" color="primary" type="submit">Login</Button>
                <Button variant="contained" color="primary" onClick={e => {
                    e.preventDefault();
                    props.history.push('/signup')
                }}>Signup</Button>
                <Button onClick={e => {
                    e.preventDefault();
                    props.history.push('/')
                }}>Back</Button>
            </div>
        </form>
    </div>
    )
}

export default LoginForm;