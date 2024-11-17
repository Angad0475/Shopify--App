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
    const totalCartItems = useSelector(getTotalCartItems) || 0;
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        // Update the active link when the route changes
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleSignOut = () => {
        setIsAuthenticated(false);
        navigate('/');
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    const menuItems = [
        { label: 'Men', path: '/men' },
        { label: 'Women', path: '/women' },
        { label: 'Kids', path: '/kids' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="navbar">
            <Sidebar className="sidebar" menuItems={menuItems} handleNavigation={handleNavigation} />

            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p className="logo-head" onClick={() => navigate('/')}>SHOPIFY</p>
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