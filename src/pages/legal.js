import React from "react";

import Layout from "../components/Layout";

const legal = () => {
  return (
    <Layout>
      <section>
        <h1>Legal Notice</h1>
        <div className="textContainer">
          <h2>
            Resposible for content/ Verantwortlich für den Inhalt gemäß § 5 TMG:
          </h2>

          <h3>Address: </h3>
          <p>Juliane Blothner</p>
          <p>Pettenkofer Str. 2</p>
          <p>50823 Köln</p>
          <p>Germany</p>

          <h3>Contact:</h3>
          <p>Email: info@serious-salmon.com</p>
          <p>Phone: +49 17696041817</p>
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
  );
};

export default legal;
