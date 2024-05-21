import React from 'react'
import './CSS/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder="Name" />
          <input type='text' placeholder='Your Email'/>
          <input type='password' placeholder='Your password'/>
        </div>
        <button className='continue'>Continue</button>
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