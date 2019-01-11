import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
            <h1>
                BUCKET LIST
            </h1>
            <input className="Text-field" type="username" id="username" placeholder="Enter username" name="username"></input>
            <input className="Text-field" type="password" id="password" placeholder="Enter password" name="password"></input>
            <button className="Login-button">
                Login
            </button>
        </header>
      </div>
    );
  }
}

export default Login;
