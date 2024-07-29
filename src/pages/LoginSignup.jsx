import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
 
function LoginSignup() {
  const [action,setAction]= useState("Login");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
        <div className='inputs'>
          {action==="Login"?<div></div>:
          <div className="input">
          <FaUser className='icon'/> <input type='text' placeholder='Name'/> 
          </div>}
          <div className="input">
            <MdEmail className='icon'/> <input type='email' placeholder='Email'/>
          </div>
          <div className="input">
            <RiLockPasswordLine className='icon'/> <input type='password' placeholder='Password'/>
          </div>
        </div> 
        {action==="Sign Up"?<div></div>:
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div> }
        <div className="submit-container">
          <div className='submits'>
          <span className={action==="Login"?" gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</span>
          <span className={action==="Sign Up"? " gray":"submit"} onClick={()=>{setAction("Login")}}>Login </span>
          </div>             
        </div>
        </div>
  )
};

     
 

export default LoginSignup