import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import GoogleButton from 'react-google-button'
import ApplicationsView from './ApplicationsView';
import '../login-signup.css'
import { useNavigate } from "react-router-dom";
import * as DataInterface from './DataInterface'


function LoginView(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [user]);

  return (
    <div className="signIn/Up">
      <div className="auth-form-container">
      <header className="title">Burn Out</header>
      {/* <header className="google-header"> */}
        <GoogleButton
          onClick={() => {
            DataInterface.authenticateWithGoogle().then((user) => {
              console.log("logged in")
              console.log(user);
              setUser(user);
              // props.onLogin();
            });
          }}
        />
      {/* </header> */}
      <br></br>
      <h1>----------------------------OR----------------------------</h1>
      <br></br>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlfor="email">Email </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email"></input>
          <label htmlfor="password">Password </label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"name="password"></input>
          <br></br>
          <button className="login-button" type="submit">Log In</button>
      </form>
      <br></br>
      <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Register here.</button>
      </div>
    </div>
  )
}

export default LoginView