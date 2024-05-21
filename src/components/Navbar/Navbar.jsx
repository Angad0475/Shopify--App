import React, { useState } from "react";
import './Navbar.css';
import logo from '../../Assets/logo.png';

import cart_icon from '../../Assets/cart_icon.png'
import {Link} from "react-router-dom"



const Navbar =()=>{

    const [Click,setClick]=useState("");

    
    return(
        <div className="navbar">
            <div className="nav-logo">
              <img src={logo} ></img> 
              <p>SHOPIFY</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setClick("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/men'>Men</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/women'>Women</Link></li>
                <li><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link></li>
            </ul>
            <div className="nav-logo-cart">
               <Link to='/login'> <button>Log in</button></Link>
               <Link to='/cart'> <img src={cart_icon} className="logo" alt="Cart"></img></Link>

                <div className="nav-cart-count">0</div>
            </div>
          

        </div>
    )
}

export default  Navbar; 

