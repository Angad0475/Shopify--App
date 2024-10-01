import React, { useRef } from "react";
import './Navbar.scss';
import logo from '../../Assets/logo.png';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { BsCart4 } from "react-icons/bs";
import { FaCircle, FaArrowCircleLeft } from "react-icons/fa";
import { getTotalCartItems } from "../../Redux/cartSlice";
import Sidebar from '../Sidebar/Sidebar'; // Import the Sidebar component

const Navbar = () => {
    const totalCartItems = useSelector(getTotalCartItems);  // Redux selector for total cart items
    const menuRef = useRef();
    const navigate = useNavigate();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the given path
    };

    // Define the navigation items to pass as props
    const menuItems = [
        { label: 'Shop', path: '/' },
        { label: 'Men', path: '/men' },
        { label: 'Women', path: '/women' },
        { label: 'Kids', path: '/kids' },
    ];

    return (
        <div className="navbar">
            {/* Pass menuItems and handleNavigation as props to Sidebar */}
            <Sidebar menuItems={menuItems} handleNavigation={handleNavigation} />

            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p className="logo-head">SHOPIFY</p>
            </div>
            
        
            
            <ul className="nav-menu">
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => handleNavigation(item.path)}>
                        {item.label}
                    </li>
                ))}
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
