import React, { useState, useEffect, useContext} from "react";
import {AuthContext} from './AuthContext'
import api from './utils/api'
import Button from '@material-ui/core/Button';
import image from './img/brew-hopper-brand.png'

function Header() {

    const {isAuth, logout} = useContext(AuthContext);
    const [currentUser, setUser] = useState({});

    useEffect(()=> {
        api.getUser().then(u =>{
            console.log(u.data)
            console.log(currentUser)
        }) 
    }, [])

    return(
        <div className="app-header row">
                <div className="header-user-info">
                </div>
                <div className="header-branding">
                    <img src={image} />
                </div>
                <div className="header-button-options">
                { isAuth ?
                    <div>
                        <Button variant="contained" color="primary" onClick={e => {e.preventDefault();logout();}}>Logout</Button>   
                    </div>
                : 
                    null
                }
            </div>
        </div>
    )
}

export default Header 


/*isAuth ?
<Button onClick={e => {e.preventDefault();logout();}}>Logout</Button>
: null}*/