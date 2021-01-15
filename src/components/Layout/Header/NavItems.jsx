import React from "react";

const NavItems = () => (
    <div id="menu" className={navItemStyles}>
        <a href="/" className="p-4">
            Home
        </a>
        <a href="/" className="p-4">
            About
        </a>
        <a href="/" className="p-4">
            Contact
        </a>
    </div>
);

//! Styles
const navItemStyles = "hidden md:block";

export default NavItems;
