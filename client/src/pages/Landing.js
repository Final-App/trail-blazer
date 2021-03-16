import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import Axios from "axios";

function Home(props) {
  
  const { isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  const getSecret = async () => {
    const secretResponse = await Axios.get("/secrets");
    console.log(secretResponse.data);
    setSecret(secretResponse.data);
  };

  return (
    <div className="signup">
        <div className="row">
          <h1>Welcome</h1>
          <p>This is a placeholder paragraph with some introductory information about the app, and some instructions for how to proceed.</p>
        </div>
        <div className="row">
        {isAuth ? (
            <div>
            <button onClick={e => {
                  e.preventDefault();
                  setSecret('');
                  logout();
                }}>
                Logout
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  props.history.push("/dashboard");
                }}
              >
                Dashboard
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={e => {
                  e.preventDefault();
                  props.history.push("/login");
                }}
              >
                Login
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  props.history.push("/signup");
                }}
              >
                Signup
              </button>
            </div>
          )}
          <div>
          <button
            onClick={e => {
              e.preventDefault();
              getSecret();
            }}
          >
            Check Auth
          </button>
          </div>

          <h1>{secret}</h1>
    </div>
    </div>
  );
}

export default Home;