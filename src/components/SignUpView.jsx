import React, { useState } from 'react'
import '../login-signup.css'
import { useNavigate } from "react-router-dom";


function SignUpView(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      }

    return(
      <div className="h-screen flex justify-center flex-col bg-dark-navy p-4">
        <div className="flex flex-col border-2 border-white">
        <div className="font-saira mb-10 mt-10 text-white text-8xl text-center">Burn Out</div>
        <form className="flex flex-col m-4 p-3 bg-dark-navy" onSubmit={handleSubmit}>
            <label>Username</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder='Enter username'></input>
            <label htmlfor="email">Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email"></input>
            <label htmlfor="password">Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"name="password"></input>
            <br></br>
            <button className="signup-button text-white text-15 font-bold border-none bg-1A508B py-20 px-20 rounded-10 cursor-pointer" type="submit">Sign Up</button>
        </form>
        <button className="link-btn text-white underline mt-3 m-3" onClick={() => navigate("/login")}>Already have an account? Login here.</button>
      <br></br>
      </div>
      </div>
    )
}

export default SignUpView