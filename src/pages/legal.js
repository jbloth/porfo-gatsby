import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import noGithub from "../../noGithub";

const legal = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Layout>
        <section>
          <h1>Legal Notice</h1>
          <div className="textContainer">
            <h2>
              Resposible for content/ Verantwortlich für den Inhalt gemäß § 5
              TMG:
            </h2>

            <h3>Address: </h3>
            <p>{noGithub.name}</p>
            <p>{noGithub.street}</p>
            <p>{noGithub.city}</p>
            <p>Germany</p>

            <h3>Contact:</h3>
            <p>Email: {noGithub.email}</p>
            <p>Phone: {noGithub.phone}</p>
          </div>

          <div className="textContainer">
            <h2>Online dispute resolution</h2>
            <p>
              The European Commission provides a platform for online dispute
              resolution (OS). This is available at{" "}
              <a href="https://ec.europa.eu/consumers/odr/">
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default legal;
