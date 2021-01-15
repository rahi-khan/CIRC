import React from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";

const Menubar = ({ handleClick }) => (
    //! Render Hamburger Icon
    <div className={styles.bars} onClick={handleClick}>
        <IconContext.Provider value={{ size: "2rem" }}>
            <FiMenu />
        </IconContext.Provider>
    </div>
);

//! Styles
const styles = {
    bars: "px-4 cursor-pointer md:hidden",
};

export default Menubar;
