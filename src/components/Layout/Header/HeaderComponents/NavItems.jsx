import React from "react";

const NavItems = () => (
    //! Render Nav Lists
    <div id="menu" className={styles.list}>
        {navList.map((navItem, idx) => (
            <a href="/" className={styles.item} key={idx}>
                {navItem}
            </a>
        ))}
    </div>
);

//! Nav List
const navList = ["Home", "About", "Contact"];

//! Styles
const styles = {
    list: "hidden md:block",
    item: "p-4",
};

export default NavItems;
