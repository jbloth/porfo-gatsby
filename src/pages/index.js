import React from "react";

import styles from "./index.module.css";
import Layout from "../components/Layout";
import WanderingText from "../components/WanderingText";
import ShapeWithPathText from "../components/ShapeWithPathText";
import RevealingText from "../components/RevealingText";
// import Ipad from "../components/Ipad";
// import Laptop from "../components/Laptop";
import ProjectDisplay from "../components/ProjectDisplay";
import EllipseWithText from "../components/EllipseWithText";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      {/* ----- Hero ------- */}
      <section className={styles.hero}>
        <div className={styles.myNameWrap}>
          <ShapeWithPathText text="MY NAME IS JULIA" />
        </div>

        <div className="textContainer">
          <h2>BLBBLBLB</h2>
          <p className={styles.indexParagraph}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatibus sit natus dolorum distinctio illo aperiam expedita odit
            quo in!
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
        </div>
      </section>

      {/* ----- About ------- */}
      <section className={styles.about}>
        <div className={styles.imAWrap}>
          <WanderingText text="IM A WEB DEVELOPER" />
        </div>
        <div className="textContainer">
          <h2>BLBBLBLB</h2>
          <p className={styles.paragraph}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatibus sit natus dolorum distinctio illo aperiam expedita odit
            quo in!
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
        </div>
      </section>

      {/* ----- Project ------- */}
      <section className={styles.projects}>
        <div className={styles.projectWrap}>
          <ProjectDisplay />
        </div>
        <div className="textContainer">
          <h2>Serious Salmon</h2>
          <h3>E-Commerce Site</h3>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
        </div>

        <div className="textContainer">
          <h3>Tech Stack</h3>
          <table className={styles.table}>
            <colgroup>
              <col span="1" className={styles.firstCol} />
              <col className={styles.secondCol} />
            </colgroup>
            <tbody>
              <tr className={styles.row}>
                <td className={styles.column}>Back End</td>
                <td className={styles.column}>
                  Wordpress and Woocommerce used as headless CMS
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.column}>Front End</td>
                <td className={styles.column}>Next.js/React</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.column}>Data Fetching</td>
                <td className={styles.column}>Apollo GraphQL client</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.buttonArea}>
          <div className={styles.flexRow}>
            <div className={styles.buttonWrap}>
              <Button>Visit Site</Button>
            </div>
            <div className={styles.buttonWrap}>
              <Button>Visit GitHub</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ----- Past ------- */}
      <section className={styles.education}>
        <div className={styles.revealingTextWrap}>
          <RevealingText />
        </div>
        <div className="textContainer">
          <h3>Got myself some degrees</h3>
          <p className={styles.paragraph}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatibus sit natus dolorum distinctio illo aperiam expedita odit
            quo in!
          </p>
        </div>
        <div className="textContainer">
          <h3>Did some work</h3>
          <p className={styles.paragraph}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatibus sit natus dolorum distinctio illo aperiam expedita odit
            quo in!
          </p>
        </div>
      </section>

      {/* ----- Contact ------- */}
      <section className={styles.contact}>
        <div className={styles.flexRow}>
          <div className={styles.goodNowWrap}>
            <EllipseWithText text={"GOOD? NOW HIRE ME."} />
          </div>
          <div id="contactForm" className={styles.contactFormWrap}>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
