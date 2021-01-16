import React from "react";

const NavItems = ({ isOpen }) => (
    //! Render Nav Lists
    <div
        className={
            isOpen
                ? "flex flex-col justify-center items-center text-center bg-purple-600 w-full absolute top-16 md:block z-50"
                : "hidden md:block"
        }
    >
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
