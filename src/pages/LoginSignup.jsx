import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'
 




function LoginSignup() {
  var [ name,setName] =useState('');

  
    
     
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
          <input type='text' placeholder='Your Email'/>
          <input type='password' placeholder='Your password'/>
        </div>
        <Link to='/'><button className='continue'>Continue</button></Link>
        <p className='loginsignup-login'>Already have an account? <span className='login'>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p className='text'>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup