import React, { useState, useEffect } from "react";
import './Navbar.scss';
import logo from '../../Assets/logo.png';
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { BsCart4 } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { getTotalCartItems } from "../../Redux/cartSlice";
import Sidebar from '../Sidebar/Sidebar';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const totalCartItems = useSelector(getTotalCartItems);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignOut = () => {
        setIsAuthenticated(false); // Log the user out
        navigate('/'); // Redirect to homepage
    };

    const handleSignUp = () => {
        navigate('/signup'); // Navigate to the login/signup page
    };

    // State to track the active navigation link
    const [activeLink, setActiveLink] = useState('/');

    // Define the navigation items to pass as props
    const menuItems = [
        { label: 'Shop', path: '/' },
        { label: 'Men', path: '/men' },
        { label: 'Women', path: '/women' },
        { label: 'Kids', path: '/kids' },
    ];

    useEffect(() => {
        // Set active link based on the current location path when the component mounts
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleNavigation = (path) => {
        setActiveLink(path); // Update the active link state
        navigate(path); // Navigate to the selected path
    };

    return (
        <div className="navbar">
            <Sidebar className='sidebar' menuItems={menuItems} handleNavigation={handleNavigation} />

            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p className="logo-head">SHOPIFY</p>
            </div>
            
            <ul className="nav-menu">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                        className={activeLink === item.path ? 'active-link' : ''}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>

            <div className="button">
                {/* Conditionally render Sign In or Sign Out button */}
                {isAuthenticated ? (
                    <button className="sign" onClick={handleSignOut}>
                        Sign Out
                    </button>
                ) : (
                    <button className="sign" onClick={handleSignUp}>
                        Sign In
                    </button>
                )}
            </div>

            <div className="nav-logo-cart">
                <BsCart4 className="logo" alt="cart" onClick={() => navigate('/cart')} />
                <div className="nav-cart-count">{totalCartItems}</div>
                <FaCircle className="circle" />
            </div>
        </div>
    );
};

export default Navbar;
