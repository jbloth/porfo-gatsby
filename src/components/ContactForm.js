import React from "react";

import styles from "./ContactForm.module.css";
import Button from "./Button";

const ContactForm = ({ lightTheme = true }) => {
  return (
    <div>
      <h2>Contact</h2>
      <form method="post" action="#">
        <div className={styles.formGroup}>
          <input
            type="text"
            aria-label="Name"
            name="Name"
            placeholder="Name"
            className={styles.formInput}
          />

          <input
            type="email"
            aria-label="Email"
            name="Email"
            placeholder="Email"
            className={styles.formInput}
          />

          <textarea
            aria-label="Message"
            name="message"
            placeholder="Message"
            rows="10"
            className={styles.formInput}
          ></textarea>
        </div>
        <div className={styles.buttonRow}>
          <div className={styles.buttonWrap}>
            <Button type="submit" big>
              SEND
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
