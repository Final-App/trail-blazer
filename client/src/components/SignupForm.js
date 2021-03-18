import React, { useState } from 'react';
import Axios from 'axios';
import AlertBox from './AlertBox'

const Signup = props => {

    const emptyUser = { first_name: '', last_name: '', email: '', password: '', date_of_birth: ''}
    const [formData, setFormData] = useState(emptyUser)
    const errorMessages = [];
    const [formDataWarning, setFormDataWarnings] = useState([])

    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        let newUser = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password,
            date_of_birth: formData.date_of_birth
        }
        if (validateUserInput(newUser)) {
            postNewUser(newUser)
            setFormData(emptyUser)
        } else {
            setFormDataWarnings(errorMessages)
        }
    }

    function ageVerification(d){
        var birthday = new Date(d);
        var diff = Date.now() - birthday;
        var age = new Date(diff);
        var year = age.getUTCFullYear();
        var final_age = Math.abs(year - 1970);
        return final_age
    }

    const validateUserInput = ({ first_name, last_name, email, password, confirm_password, date_of_birth}) => {
        
        let isValid = false;
        setFormDataWarnings([]);

        if (!first_name)
            errorMessages.push('First name is required.')
        if (!last_name)
            errorMessages.push('Last name is required.')
        if (!email) 
            errorMessages.push('Email is required')
        if (!password || password.length < 6)
           errorMessages.push('Password is required and must be at least 6 characters.')
        if (!date_of_birth)
            errorMessages.push('Date of birth is required.')
        if (ageVerification(date_of_birth) < 21)
            errorMessages.push('You must be 21 years old to use this application.')
        if (errorMessages.length == 0){
            isValid = true
        }
        return isValid;
    }

    const postNewUser = newUser => {
        Axios.post('/signup', newUser)
            .then(() => {
                props.history.push('/login')
            })
            .catch(err => console.log(err))
    }

    function renderErrors(){
        if(formDataWarning.length > 0){
            return <AlertBox messages={formDataWarning} type="error" />
        }else{
            return null
        }
    }

    return (
        <div>
    
        {renderErrors()}

        <form onSubmit={handleFormSubmit}>
            <label>First name:</label>
            <input name="first_name" type="text" placeholder="" value={formData.first_name} onChange={handleInputChange} />

            <label>Last name:</label>
            <input name="last_name" type="text" placeholder="" value={formData.last_name} onChange={handleInputChange} />

            <label>Email address:</label>
            <input name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />

            <label>Password:</label>
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />

            <label>Date of birth:</label>
            <input name="date_of_birth" type="date" placeholder="Date" value={formData.date_of_birth} onChange={handleInputChange} />

            <br />
            <button variant="primary" type="submit">
                Submit
            </button>

            <button onClick={e => {
                e.preventDefault();
                props.history.push('/')
            }}>Home</button>
        </form>
        </div>
    )
}

export default Signup;