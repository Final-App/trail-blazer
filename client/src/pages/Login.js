import React from "react";

function Login() {
    return (
        <div className="login-item">
            <form>
                <label for="username">username:</label>
                <input type="text" id="username" name="username" />
                    <br/><br/>
                    <label for="password">password:</label>
                    <input type="text" id="password" name="password" />
                    <br/><br/>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login