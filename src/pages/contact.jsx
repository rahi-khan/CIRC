import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    //! Render Contact UI
    return (
        <Layout>
            <SEO title="Contact" description="Contact Page" />

            <Row className="h-100">
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="mb-3">Get in touch</h1>

                    <ul className="list-unstyled w-25 d-flex justify-content-between">
                        <li>
                            <a
                                href="https://twitter.com/rahikhan_dev"
                                target="_blank"
                                rel="noreferrer"
                                className="text-secondary"
                            >
                                <h3>
                                    <FaTwitter />
                                </h3>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/_rahikhan_/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-secondary"
                            >
                                <h3>
                                    <FaInstagram />
                                </h3>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/rahikhan/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-secondary"
                            >
                                <h3>
                                    <FaLinkedin />
                                </h3>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/rahi-khan"
                                target="_blank"
                                rel="noreferrer"
                                className="text-secondary"
                            >
                                <h3>
                                    <FaGithub />
                                </h3>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Layout>
    );
};

export default Contact;
