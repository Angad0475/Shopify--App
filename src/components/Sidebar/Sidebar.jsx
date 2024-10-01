import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { GoSidebarExpand } from "react-icons/go"; // Import icons
import './Sidebar.scss';

const Sidebar = ({ menuItems, handleNavigation }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Show the open icon outside the sidebar when it's closed */}
            {!isOpen && (
                <button onClick={toggleSidebar} className="toggle-btn outside">
                    <IoReorderThreeOutline className="Open-Menu" />
                </button>
            )}
            
            <div className={isOpen ? 'sidebar open' : 'sidebar'}>
                {/* Close icon inside the sidebar */}
                {isOpen && (
                    <button onClick={toggleSidebar} className="toggle-btn inside">
                        <GoSidebarExpand className="Close-Menu" />
                    </button>
                )}
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
        </>
    );
};

export default Sidebar;
