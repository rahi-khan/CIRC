import React from "react";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col className="vh-100 d-flex flex-column">
                    <Header />
                    <div className="flex-grow-1">{children}</div>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;
