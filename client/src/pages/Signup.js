import React from 'react'
import "../App.css";
import SignupForm from "../components/SignupForm";

function Signup(props) {
  return (
    <div className="signup">
          <SignupForm {...props} />
    </div>
  );
}

export default Signup;