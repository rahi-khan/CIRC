import React from "react";
import Header from "./Header/header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    );
};

export default Layout;
