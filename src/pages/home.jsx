import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";
import gatsbyGif from "../images/gatsby.gif";

const Home = () => {
    //! Render Home UI
    return (
        <Layout>
            <SEO title="Home" description="Home Page" />

            <div>
                <div>
                    <img src={gatsbyGif} alt="Gatsby GIF" style={{ width: "50%" }} />
                    <h4>
                        Good luck hacking!{" "}
                        <span role="img" aria-label="cool emoji">
                            😎
                        </span>
                    </h4>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
