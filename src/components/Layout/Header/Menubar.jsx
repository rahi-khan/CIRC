import React from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";

const Menubar = () => (
    <div id="bars" className={menuStyles}>
        <IconContext.Provider value={{ size: "2rem" }}>
            <FiMenu />
        </IconContext.Provider>
    </div>
);

//! Styles
const menuStyles = "px-4 cursor-pointer md:hidden";

export default Menubar;
