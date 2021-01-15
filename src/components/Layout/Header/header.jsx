import React from "react";
import Brand from "./HeaderComponents/Brand";
import Menubar from "./HeaderComponents/Menubar";
import NavItems from "./HeaderComponents/NavItems";

const Header = () => (
    //! Render Header UI
    <nav className={styles.nav}>
        <Brand />
        <Menubar />
        <NavItems />
    </nav>
);

//! Styles
const styles = {
    nav:
        "flex h-16 justify-between items-center bg-gradient-to-r from-purple-700 to-purple-600 text-white",
};

export default Header;
