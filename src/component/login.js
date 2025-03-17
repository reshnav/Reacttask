import React from "react";
import "../Login.css"; // Importing the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Instapract</h1>
        <p>User Centric Teleconsulting, Expert Opinion Platform.</p>
      </div>
      <div className="login-right">
        <div className="login-box">
          <img src="/logo.png" alt="InstaPract Logo" className="logo" />
          <h2>Login</h2>
          <form>
            <label>Username</label>
            <input type="email" placeholder="janesmith@mymail.com" />

            <label>Password</label>
            <input type="password" placeholder="**********" />

            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
