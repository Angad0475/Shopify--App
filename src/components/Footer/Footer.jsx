import React from 'react'
import './Footer.scss'
import footer_logo from '../../Assets/logo_big.png';
import instagram_icon from '../../Assets/instagram_icon.png';

import pintester_icon from '../../Assets/pintester_icon.png';

import whatsapp_icon from '../../Assets/whatsapp_icon.png';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

 function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <FaInstagram/>
            </div>
            <div className="footer-icons-container">
                <FaPinterest/>
            </div>
            <div className='footer-icons-container'>
                <FaWhatsapp/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright &copy; 2023-All Right Reserved.</p>
        </div>
    </div>
  )
}
export default Footer;