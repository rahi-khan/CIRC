import React, { useState, useEffect } from "react";
import Brand from "./HeaderComponents/Brand";
import Menubar from "./HeaderComponents/Menubar";
import NavItems from "./HeaderComponents/NavItems";

const Header = () => {
    const [isOpen, setisOpen] = useState(false);

    //! Set navlist to block while window resizing
    useEffect(() => {
        const hideMenu = () => {};

        window.addEventListener("resize", hideMenu);
        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    });

    //! Styles
    const styles = {
        nav:
            "flex h-16 justify-between items-center bg-gradient-to-r from-purple-700 to-purple-600 text-white relative",
    };

    //! Handle Click
    const handleClick = () => setisOpen(!isOpen);

    return (
        //?   Render Header UI
        <nav className={styles.nav}>
            {/*//// Brand Name/logo */}
            <Brand />

            {/*//// Hamburger Menu */}
            <Menubar handleClick={handleClick} isOpen={isOpen} />

            {/*//// Nav Items */}
            <NavItems isOpen={isOpen} />
        </nav>
    );
};

export default Header;
