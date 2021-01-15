import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/seo";

const Home = () => {
    //! Querying page data
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "img.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );

    //! Render Home UI
    return (
        <Layout>
            <SEO title="Home" description="Home Page" />

            <BackgroundImage
                Tag="section"
                fluid={data.file.childImageSharp.fluid}
                className={styles.BGimg}
            >
                <div className={styles.texts}>
                    <h1 className={styles.heading}>Choose your colors</h1>

                    <a href="/" className={styles.link}>
                        {/* <span className="mr-3">Explore</span> <FaArrowCircleRight /> */}
                        Explore
                        <FaArrowCircleRight />
                    </a>
                </div>
            </BackgroundImage>
        </Layout>
    );
};

//! Styles
const styles = {
    BGimg: "h-full flex justify-center items-center",
    texts: "text-center font-bold flex flex-col justify-center items-center",
    heading:
        "text-2xl sm:text-4xl md:text-6xl lg:text-8xl mb-10 text-purple-600 hover:text-white duration-300",
    link:
        "text-white text-xl transform hover:scale-110 duration-300 flex justify-center items-center",
};

export default Home;
