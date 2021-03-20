import React, {useEffect, useState, useContext} from 'react'
import Button from '@material-ui/core/Button';
import { AuthContext } from './AuthContext'

function Header(){
    const { currentUser, isAuth, logout } = useContext(AuthContext)
    return(
        <div className="app-header">
            <span className="user-avatar"></span>
            { isAuth ?
            <div className="logged-in-header-content">
                <span className="user-greeting">Greetings {currentUser.first_name}!</span>
                <Button className="nav-button" onClick={e => {e.preventDefault();logout();}}>Logout</Button>   
            </div>
            : null 
            }
        </div>          
    )
}

export default Header 


/*isAuth ?
<Button onClick={e => {e.preventDefault();logout();}}>Logout</Button>
: null}*/