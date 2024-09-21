import React, { useState } from 'react';
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go"; // Import icons
import './Sidebar.scss';

const Sidebar = ({ menuItems, handleNavigation }) => { // Accept menuItems as a prop
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={isOpen ? ' sidebar open' : 'sidebar'}>
            <button onClick={toggleSidebar} className="toggle-btn">
                {isOpen ? <GoSidebarCollapse className="Close Menu" /> : <GoSidebarExpand className="Open Menu" />}
            </button>
            {isOpen && (
                <nav className="menu">
                    {/* Map through the menuItems prop to dynamically render links */}
                    {menuItems.map((item, index) => (
                        <a key={index} onClick={() => handleNavigation(item.path)}>
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </div>
    );
};

export default Sidebar;
