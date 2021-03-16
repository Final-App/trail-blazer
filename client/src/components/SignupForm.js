import React, { useState } from 'react';
import Axios from 'axios';

const Signup = props => {

    const emptyUser = { first_name: '', last_name: '', email: '', password: '', date_of_birth: ''}
    const errorMessage = 'invalid credentials'

    const [formData, setFormData] = useState(emptyUser)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')

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
            setCredsAreInvalid(errorMessage)
        }
    }

    const validateUserInput = ({ first_name, last_name, email, password, date_of_birth}) => {
        let isValid = true;

        if (!first_name || !last_name || !email || !password || !date_of_birth) {
            isValid = false;
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

    return (
        <form onSubmit={handleFormSubmit}>

            <label>First name</label>
            <input name="first_name" type="text" placeholder="" value={formData.first_name} onChange={handleInputChange} />
            <br />

            <label>Last name</label>
            <input name="last_name" type="text" placeholder="" value={formData.last_name} onChange={handleInputChange} />
            <br />

            <label>Email address</label>
            <input name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange} />
            <br />


            <label>Password</label>
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            <br />

            <div className="text-danger">
                 {credsAreInvalid}
            </div>
            <br />

            <label>Date of birth</label>
            <input name="date_of_birth" type="date" placeholder="Date" value={formData.date_of_birth} onChange={handleInputChange} />
            <br />

            <button variant="primary" type="submit">
                Submit
            </button>
            <br />

            <button onClick={e => {
                e.preventDefault();
                props.history.push('/')
            }}>Home</button>
        </form>
    )
}

export default Signup;