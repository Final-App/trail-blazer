import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [currentUser, setCurrentUser] = useState({id:'', first_name:'',last_name:'',email:''});

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        Axios.get('/user_data')
            .then(response => {
                if (response.data.email) {
                    setIsAuth(true)
                    setCurrentUser({
                        id: response.data.id,
                        first_name: response.data.first_name,
                        last_name: response.data.last_name,
                        email: response.data.email
                    })
                } else {
                    setIsAuth(false)
            }
        })
    }

    const logout = async () => {
        Axios.get("/logout")
          .then(() => {
            setIsAuth(false);
            return <Redirect to='/' />
          })
          .catch(err => console.log(err));
      };

    return <AuthContext.Provider value={{ isAuth, setIsAuth, checkAuth, logout, currentUser, setCurrentUser }}>{children}</AuthContext.Provider>;
};
