import React from "react";

function Signup() {
    
    //Need to write function for password and confirm-password match

    return (
        <div className="login-item">
            <form>
                <label for="username">username:</label>
                <input type="text" id="username" name="username" />
                    <br/><br/>
                    <label for="password">password:</label>
                    <input type="text" id="password" name="password" />
                    <br/><br/>
                    <label for="password">confirm password:</label>
                    <input type="text" id="confirm-password" name="confirm-password" />
                    <br/><br/>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Signup