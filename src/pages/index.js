import React from "react";

import styles from "./index.module.css";
import Layout from "../components/Layout";
import WanderingText from "../components/WanderingText";
import ShapeWithPathText from "../components/ShapeWithPathText";
// import RevealingText from "../components/RevealingText";
// import Ipad from "../components/Ipad";
// import Laptop from "../components/Laptop";
import ProjectDisplay from "../components/ProjectDisplay";
import EllipseWithText from "../components/EllipseWithText";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.myNameWrap}>
          <ShapeWithPathText text="MY NAME IS JULIA" />
        </div>

        <div className={styles.textContainer}>
          <h1>BLBBLBLB</h1>
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

      <section className={styles.about}>
        <div className={styles.imAWrap}>
          <WanderingText text="IM A WEB DEVELOPER" />
        </div>
        <div className={styles.textContainer}>
          <h1>BLBBLBLB</h1>
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

      <section className={styles.projects}>
        <div className={styles.heresAWrap}>
          {/* <RevealingText /> */}

          {/* </div> */}

          {/* <div className={styles.project}> */}
          {/* <div className={styles.flexRow}> */}
          {/* <div className={styles.projectImgContainer}> */}
          {/* <img
          className={styles.projectImg}
          src={"/images/project.png"}
          alt="Reference project shop page"
        /> */}
          <ProjectDisplay />
          {/* <Ipad />
              <Laptop />
            </div>
            <div className={styles.projectInfo}>
              <h2 className={styles.projectHeading}>Serious Salmon</h2>
              <h3 className={styles.projectSubHeading}>E-Commerce Site</h3>
              <p className={styles.paragraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam voluptatibus sit natus dolorum distinctio illo aperiam
                expedita odit quo in!
              </p>
            </div>
          </div>*/}
        </div>
        {/* <div className={styles.textContainer}>
          <h1>BLBBLBLB</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
        </div> */}
      </section>

      <section className={styles.education}>
        <div className={styles.textContainer}>
          <h1>BLBBLBLB</h1>
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
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.flexRow}>
          <div className={styles.goodNowWrap}>
            <EllipseWithText text={"GOOD? NOW HIRE ME."} />
          </div>
          <div className={styles.contactFormWrap}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className={styles.education}>
        <div className={styles.textContainer}>
          <h1>BLBBLBLB</h1>
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
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit corrupti alias quas voluptates quo voluptatem hic
            necessitatibus, minima soluta ex autem et, unde delectus quidem odio
            dignissimos asperiores velit iusto non eum voluptas ab. Repellendus
            nulla officiis fugiat possimus?
          </p>
          <div className={styles.contactFormWrap}>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
