import React from 'react'
import '../styling/Login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='background'>
        <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username/email' required/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
                <FaLock className='icon'/>
            </div>

            <div className='remember-forgot'>
                <a href='#'>Forgot password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className='register-link'>
                <p>Don't have an account? <Link to={'/Registration'} >Register</Link></p>
            </div>
        </form>
    </div>
    </div>

    
  )
}

export default Login;