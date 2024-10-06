import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.scss';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function LoginSignup({ setIsAuthenticated }) {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    
    if (action === "Sign Up" && !name) {
      formErrors.name = "Name is required.";
    }

    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      formErrors.email = "Email is invalid.";
    }

    if (!password) {
      formErrors.password = "Password is required.";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsAuthenticated(true);  // Update authentication status to true
      navigate('/');  // Redirect to the "Shop" page after submission
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? null :
          <div className="input">
            <FaUser className='icon' /> 
            <input 
              type='text' 
              placeholder='Name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>}
        <div className="input">
          <MdEmail className='icon' /> 
          <input 
            type='email' 
            placeholder='Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="input">
          <RiLockPasswordLine className='icon' /> 
          <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
      </div>
      {action === "Sign Up" ? null :
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>}
      <div className="submit-container">
        <div className='submits'>
          <span 
            className={action === "Login" ? "gray" : "submit"} 
            onClick={() => { setAction("Sign Up"); setErrors({}); }}
          >
            Sign Up
          </span>
          <span 
            className={action === "Sign Up" ? "gray" : "submit"} 
            onClick={() => { setAction("Login"); setErrors({}); }}
          >
            Login
          </span>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default LoginSignup;
