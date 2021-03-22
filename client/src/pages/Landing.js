import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import Button from '@material-ui/core/Button';

function Home(props) {
  
  const { isAuth, logout } = useContext(AuthContext);

  return (
    <div className="signup">
      <div className="row">
          <h1>Welcome to Brew-Hopper</h1>
          <p>Going on a trip or looking for your own local brew pubs? Brew-Hopper app helps you find your local brews and plan your night out.</p>
        </div>
        <div className="row">
        <div className="button-area">
        <Button variant="contained" color="primary" onClick={e => {e.preventDefault();props.history.push("/login");}}>Login</Button>
        <Button variant="contained" color="primary" onClick={e => {e.preventDefault();props.history.push("/signup");}}>Signup</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
