import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import GoogleButton from 'react-google-button'
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
    <div className="h-screen justify-center flex flex-col bg-dark-navy">
      <div className="flex flex-col bg-dark-navy m-5">
      <div className="flex flex-col border-2 border-white">
      <div className="font-saira mb-10 mt-10 text-white text-8xl text-center">Burn Out</div>
      
      <GoogleButton
      className='mx-auto my-4'
          onClick={() => {
            DataInterface.authenticateWithGoogle().then((user) => {
              console.log("logged in")
              console.log(user);
              setUser(user);
              // props.onLogin();
            });
          }}
        />
        <br></br>
        <h1>---------------------OR--------------------</h1>
        <form className="flex flex-col bg-dark-navy m-4 p-4" onSubmit={handleSubmit}>
          <label htmlfor="email">Email </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email"></input>
          <label htmlfor="password">Password </label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"name="password"></input>
          <br></br>
          <button className="login-button text-white text-15 font-bold border-none bg-1A508B py-20 px-20 rounded-10 cursor-pointer" type="submit">Log In</button>
      </form>
      <button className="link-btn text-white underline mt-3" onClick={() => navigate("/signup")}>Don't have an account? Register here.</button>
      <br></br>
      </div>
      </div>
    </div>
  )
}

export default LoginView