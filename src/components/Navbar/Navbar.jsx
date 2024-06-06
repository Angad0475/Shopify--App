import React, { useState, useContext } from "react";
import './Navbar.css';
import logo from '../../Assets/logo.png';

import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import {useAuth0} from '@auth0/auth0-react'
import { BsCart4 } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";



const Navbar = () => {
    const [click, setClick] = useState("");  // State to manage click events
    const { getTotalCartItems } = useContext(ShopContext);  // Context to get total cart items
    const{user,loginWithRedirect, isAuthenticated,logout}=useAuth0();


    

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPIFY</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setClick("Shop")}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
                </li>
            </ul>

            <div className="button">
                <Link to='/login'><button className="sign">Sign In</button></Link>
            
            </div>

            <div className="nav-logo-cart">

            
        
                
                <Link to='/cart'>
                    <BsCart4 className="logo" alt="cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()} </div>
                <FaCircle className="circle" />
            </div>
        </div>
    );
}

export default Navbar;
