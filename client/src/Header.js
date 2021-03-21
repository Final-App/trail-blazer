import React from 'react'
import BrewHopperImg from './img/brew-hopper-brand.png'

function Header(){
    return(
        <div className="app-header">
        <img src={BrewHopperImg}/>
        </div>
    );
}

export default Header