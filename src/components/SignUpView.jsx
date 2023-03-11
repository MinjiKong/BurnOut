import React, { useState } from 'react'

function SignUpView(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      }

    return(
        <div className="auth-form-container">
        <header className="title">Burn Out</header>
        <form className="signup-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder='Enter username'></input>
            <label htmlfor="email">Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email"></input>
            <label htmlfor="password">Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"name="password"></input>
            <br></br>
            <button className="signup-button" type="submit">Sign Up</button>
        </form>
        <br></br>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
      </div>
    )
}

export default SignUpView