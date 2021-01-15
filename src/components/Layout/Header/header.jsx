import React from "react";
import Menubar from "./Menubar";
import NavItems from "./NavItems";

const Header = () => {
    //! Render Header UI
    return (
        <nav className={navStyles}>
            <a href="/" id="logo" className="pl-6">
                CIRC
            </a>

            <Menubar />

            <NavItems />
        </nav>
    );
};

//! Styles
const navStyles =
    "flex h-16 justify-between items-center bg-gradient-to-r from-purple-700 to-purple-600 text-white";

export default Header;
