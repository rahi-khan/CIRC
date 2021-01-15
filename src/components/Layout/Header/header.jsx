import React, { useState, useEffect } from "react";
import Brand from "./HeaderComponents/Brand";
import Menubar from "./HeaderComponents/Menubar";
import NavItems from "./HeaderComponents/NavItems";

const Header = () => {
    const [menuVisibility, setMenuVisibility] = useState("hidden");

    //! Set navlist to block while window resizing
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                if (menuVisibility !== "hidden") {
                    setMenuVisibility("hidden");
                }
            }
        });

        return () => {
            window.removeEventListener("resize", () => {
                if (window.innerWidth > 768) {
                    setMenuVisibility("hidden");
                }
            });
        };
    });

    //! Styles
    const styles = {
        nav:
            "flex h-16 justify-between items-center bg-gradient-to-r from-purple-700 to-purple-600 text-white relative",
        list: `${menuVisibility} md:block`,
    };

    //! Handle Click
    const handleClick = () => {
        menuVisibility === "hidden"
            ? setMenuVisibility("flex flex-col text-center bg-purple-600 w-full absolute top-16")
            : setMenuVisibility("hidden");
    };

    return (
        //?   Render Header UI
        <nav className={styles.nav}>
            {/*//// Brand Name/logo */}
            <Brand />

            {/*//// Hamburger Menu */}
            <Menubar handleClick={handleClick} />

            {/*//// Nav Items */}
            <NavItems listStyle={styles.list} />
        </nav>
    );
};

export default Header;
