import React from "react";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <Row>
            <Col>
                <h6 className="text-center mb-0 py-4">
                    Created by{" "}
                    <a href="https://twitter.com/rahikhan_dev" style={{ color: "#7B4FA7" }}>
                        {data.site.siteMetadata.author}
                    </a>
                </h6>
            </Col>
        </Row>
    );
};

export default Footer;
