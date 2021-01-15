import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
            file {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <Row>
            <Col className="px-0">
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand as={Link} to="/">
                        <Img fixed={data.file.childImageSharp.fixed} alt="Gatsby Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/" activeClassName="active">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" activeClassName="active">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" activeClassName="active">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    );
};

export default Header;
