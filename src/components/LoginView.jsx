import React, { useState } from 'react'
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import ApplicationsView from './ApplicationsView';

function LoginView(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="signIn/Up">
      <div className="auth-form-container">
      <header className="title">Burn Out</header>
      <header className="google-header">
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse.credential);
            var decoded = jwt_decode(credentialResponse.credential)
            console.log(decoded)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </header>
      <br></br>
      <h1>----------------------------OR----------------------------</h1>
        <br></br>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlfor="email">Email </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email"></input>
          <label htmlfor="password">Password </label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"name="password"></input>
          <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Register here.</button>
      </div>
    </div>
  )
}

export default LoginView