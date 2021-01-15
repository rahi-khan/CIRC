import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";
import { useStaticQuery, graphql } from "gatsby";

const About = () => {
    //! Query Page Data
    const data = useStaticQuery(graphql`
        {
            allAboutDataJson {
                edges {
                    node {
                        name
                        url
                    }
                }
            }
        }
    `);

    //! Render About UI
    return (
        <Layout>
            <SEO title="About" description="About Page" />

            <Row className="h-100 align-items-center">
                <Col className="h-100 text-center d-flex flex-column justify-content-center">
                    <h1 className="mb-5">What's in this template?</h1>
                    <ul className="list-unstyled d-flex flex-column align-items-center">
                        {data.allAboutDataJson.edges.map(({ node }) => (
                            <li>
                                <a
                                    href={node.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white"
                                >
                                    <h5>{node.name}</h5>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Layout>
    );
};
export default About;
