import React from "react";
import Header from "./Header/header";

const Layout = ({ children }) => (
    //! Render Layout
    <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
    </div>
);

//! Styles
const styles = {
    container: "flex flex-col h-screen",
    content: "flex-grow",
};

export default Layout;
