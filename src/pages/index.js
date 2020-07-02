import React from "react";

import styles from "./index.module.css";
import Layout from "../components/Layout";
import WanderingText from "../components/WanderingText";
import ShapeWithPathText from "../components/ShapeWithPathText";
import RevealingText from "../components/RevealingText";

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.myNameWrap}>
          <ShapeWithPathText text="MY NAME IS JULIA" />
        </div>

        <div className={styles.placeholderTextContainer}>
          <div className={styles.placeholderText}>
            <h1>BLBBLBLB</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam voluptatibus sit natus dolorum distinctio illo aperiam
              expedita odit quo in!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              impedit corrupti alias quas voluptates quo voluptatem hic
              necessitatibus, minima soluta ex autem et, unde delectus quidem
              odio dignissimos asperiores velit iusto non eum voluptas ab.
              Repellendus nulla officiis fugiat possimus?
            </p>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.imAWrap}>
          <WanderingText text="IM A WEB DEVELOPER" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          voluptatibus sit natus dolorum distinctio illo aperiam expedita odit
          quo in!
        </p>
      </section>

      <section className={styles.hero}>
        <div className={styles.heresAWrap}>
          <RevealingText />
        </div>
        <div className={styles.placeholderTextContainer}>
          <div className={styles.placeholderText}>
            <h1>BLBBLBLB</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam voluptatibus sit natus dolorum distinctio illo aperiam
              expedita odit quo in!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              impedit corrupti alias quas voluptates quo voluptatem hic
              necessitatibus, minima soluta ex autem et, unde delectus quidem
              odio dignissimos asperiores velit iusto non eum voluptas ab.
              Repellendus nulla officiis fugiat possimus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              impedit corrupti alias quas voluptates quo voluptatem hic
              necessitatibus, minima soluta ex autem et, unde delectus quidem
              odio dignissimos asperiores velit iusto non eum voluptas ab.
              Repellendus nulla officiis fugiat possimus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              impedit corrupti alias quas voluptates quo voluptatem hic
              necessitatibus, minima soluta ex autem et, unde delectus quidem
              odio dignissimos asperiores velit iusto non eum voluptas ab.
              Repellendus nulla officiis fugiat possimus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              impedit corrupti alias quas voluptates quo voluptatem hic
              necessitatibus, minima soluta ex autem et, unde delectus quidem
              odio dignissimos asperiores velit iusto non eum voluptas ab.
              Repellendus nulla officiis fugiat possimus?
            </p>
            <div className={styles.rect}>jaja</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
