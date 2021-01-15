import React from "react";

const NavItems = ({ listStyle }) => (
    //! Render Nav Lists
    <div className={listStyle}>
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
    item: "p-4",
};

export default NavItems;
