import React, { useState, useContext, useRef } from "react";
import './Navbar.css';
import logo from '../../Assets/logo.png';

import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { BsCart4 } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";



const Navbar = () => {
    const [click, setClick] = useState("");  // State to manage click events
    const { getTotalCartItems } = useContext(ShopContext);  // Context to get total cart items
    const menuRef = useRef()

    const dropdown_toggle=(e)=>{
       menuRef.current.classList.toggle('nav-menu-visible');
       e.target.classList.toggle('open');
    
       
    }
    


    

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPIFY</p>
            </div>
            <FaArrowCircleLeft   className="nav-dropdown" onClick={dropdown_toggle}/>
            <ul ref={menuRef} className="nav-menu">
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
                <Link to='/SignUp'><button className="sign">Sign In</button></Link>
            
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
