import React, { useState, useRef } from "react";
import './Navbar.scss';
import logo from '../../Assets/logo.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { BsCart4 } from "react-icons/bs";
import { FaCircle, FaArrowCircleLeft } from "react-icons/fa";
import { getTotalCartItems } from "../../Redux/cartSlice";
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";

const Navbar = () => {
    const [click, setClick] = useState("");  // State to manage click events
    const totalCartItems = useSelector(getTotalCartItems);  // Using selector to get total cart items
    const menuRef = useRef();
    const navigate = useNavigate();
    const [isOpen,setIsOpen]= useState(false);

    const toggleSidebar=()=>{
        setIsOpen(!isOpen);
    };

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="navbar">
            <div classname={isOpen ?'sidebar       open':'sidebar'}>
                <button onclick={toggleSidebar}
                 className="toggle-btn">
                    {isOpen ?  <GoSidebarExpand className="Close Menu"/> : <GoSidebarCollapse className="Open Menu"/>}
                 </button>
                 {isOpen && (
                 <nav className="menu">
                    <li onClick={() => handleNavigation('/')}>Shop</li>
                    <li onClick={() => handleNavigation('/men')}>Men</li>
                    <li onClick={() => handleNavigation('/women')}>Women</li>
                    <li onClick={() => handleNavigation('/kids')}>Kids</li>
                 </nav>
                )}
            </div>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>SHOPIFY</p>
            </div>
            <FaArrowCircleLeft className="nav-dropdown" onClick={dropdown_toggle} />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => handleNavigation('/')}> {/* Navigate to home */}
                    Shop
                </li>
                <li onClick={() => handleNavigation('/men')}> {/* Navigate to men */}
                    Men
                </li>
                <li onClick={() => handleNavigation('/women')}> {/* Navigate to women */}
                    Women
                </li>
                <li onClick={() => handleNavigation('/kids')}> {/* Navigate to kids */}
                    Kids
                </li>
            </ul>

            <div className="button">
                <button className="sign" onClick={() => handleNavigation('/SignUp')}>Sign In</button>
            </div>

            <div className="nav-logo-cart">
                <BsCart4 className="logo" alt="cart" onClick={() => handleNavigation('/cart')} />
                <div className="nav-cart-count">{totalCartItems}</div>
                <FaCircle className="circle" />
            </div>
        </div>
    );
}

export default Navbar;


/*import React, { useState } from 'react';
import './Slidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ?  <GoSidebarExpand className="Close Menu"/> : <GoSidebarCollapse className="Open Menu"/>}
      </button>

      <nav className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
    </div>
  );
};

export default Sidebar;
*/