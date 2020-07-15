import React from "react";

import styles from "./index.module.css";
import Layout from "../components/Layout";
import WanderingText from "../components/WanderingText";
import ShapeWithPathText from "../components/ShapeWithPathText";
import RevealingText from "../components/RevealingText";
import ProjectDisplay from "../components/ProjectDisplay";
import EllipseWithText from "../components/EllipseWithText";
import ProgressBar from "../components/ProgressBar";
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

        {/* <div className="textContainer">
            <h2>BLBBLBLB</h2>
            <p className={styles.indexParagraph}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam voluptatibus sit natus dolorum distinctio illo aperiam
              expedita odit quo in!
            </p>
          </div>  */}
      </section>

      {/* ----- About ------- */}
      <section id="about" className={styles.about}>
        <div className={styles.imAWrap}>
          <WanderingText text="IM A WEB DEVELOPER..." />
        </div>
        <div className="textContainer">
          <h2>...and web designer</h2>
          <p className={styles.paragraph}>
            I work freelance from Cologne, Germany. I have a degree in media
            engineering and media art, but when it comes to web development, I'm
            mostly self-taught. In my work I seek to create products that feel
            unique while still being performant and user firendly.
          </p>
          <h4>My favourite tools:</h4>
          <p className={styles.paragraph}>
            My focus is on Javascript stacks. I also like Wordpress a lot.
          </p>
          <br />
          <div className={styles.skillsArea}>
            <div className={styles.skillRow}>
              <div className={styles.skillLabel}>HTML</div>
              <div className={styles.progressBarWrap}>
                <ProgressBar progressPercent={80} />
              </div>
            </div>
            <div className={styles.skillRow}>
              <div className={styles.skillLabel}>CSS</div>
              <div className={styles.progressBarWrap}>
                <ProgressBar progressPercent={80} />
              </div>
            </div>
            <div className={styles.skillRow}>
              <div className={styles.skillLabel}>Javascript</div>
              <div className={styles.progressBarWrap}>
                <ProgressBar progressPercent={70} />
              </div>
            </div>
            <div className={styles.skillRow}>
              <div className={styles.skillLabel}>React</div>
              <div className={styles.progressBarWrap}>
                <ProgressBar progressPercent={70} />
              </div>
            </div>
            <div className={styles.skillRow}>
              <div className={styles.skillLabel}>Wordpress</div>
              <div className={styles.progressBarWrap}>
                <ProgressBar progressPercent={50} />
              </div>
            </div>
            <div className={styles.skillRow}>
              <div className={styles.skillLabel}>Figma</div>
              <div className={styles.progressBarWrap}>
                <ProgressBar progressPercent={50} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- Project ------- */}
      <section id="projects" className={styles.projects}>
        <div className={styles.projectWrap}>
          <ProjectDisplay />
        </div>
        <div className="textContainer">
          <h2>Serious Salmon</h2>
          <h3>E-Commerce Site made with next.js and headless Wordpress</h3>
          <p className={styles.paragraph}>
            Being a passionate doodler, I decided to make a store where I can
            sell products printed with my designs. I selected printful as a
            print on demand provider. As they have a very good WooCommerce
            integration, I wanted to use Wordpress as a Content Manangement
            System, but also leverage the exceptional user experience that React
            provides. The next.js framework was chosen to build the site as it
            comes with many optimizations, does only require minimal
            configuration and allows me to choose between server site rendered
            and statically generated pages.
          </p>
          <br />
          <p>
            I used the{" "}
            <a href="https://www.wpgraphql.com/">WP GraphQL Plugin</a> with its
            WooCommerce extension on the Wordpress side and{" "}
            <a href="https://www.apollographql.com/client/">Apollo Client</a> on
            the client side for delivering the product information to the
            frontend.
          </p>
        </div>

        <div className="textContainer">
          <h3>Technologies Used</h3>
          <table className={styles.table}>
            <colgroup>
              <col span="1" className={styles.firstCol} />
              <col className={styles.secondCol} />
            </colgroup>
            <tbody>
              <tr className={styles.row}>
                <td className={styles.column}>CMS</td>
                <td className={styles.column}>
                  Headless Wordpress and Woocommerce
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
          <div className={styles.buttons}>
            <div className={styles.buttonWrap}>
              <a href="https://next.serious-salmon.com/">
                <Button>Visit Site</Button>
              </a>
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
          <table className={styles.tableNoBorder}>
            <tbody>
              <tr>
                <td className={styles.columnNoBorder}>2003-2009</td>
                <td className={styles.columnNoBorder}>
                  Audiovisual Media (Diploma) at the Academy of Media Arts in
                  Cologne with a focus on filmmaking
                </td>
              </tr>
              <tr>
                <td className={styles.columnNoBorder}>2010-2014</td>
                <td className={styles.columnNoBorder}>
                  Bachelors Degree in Media Engineering at the University of
                  Applied Sciences Cologne
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="textContainer">
          <h3>Did some work</h3>
          <table className={styles.tableNoBorder}>
            {/* <colgroup>
                <col span="1" className={styles.firstCol} />
                <col className={styles.secondCol} />
              </colgroup> */}
            <tbody>
              <tr>
                <td className={styles.columnNoBorder}>2013-2019</td>
                <td className={styles.columnNoBorder}>
                  Worked at Arri Cine Technik in Munich in Research and
                  Development on color and image processing as well as image
                  sensor evaluation.
                </td>
              </tr>
            </tbody>
          </table>
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
