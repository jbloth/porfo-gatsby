import React from "react";

import styles from "./ContactForm.module.css";
import Button from "./Button";

const ContactForm = ({ lightTheme = true }) => {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className={styles.formInput}
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className={styles.formInput}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className={styles.formInput}
          ></textarea>
        </div>
        <div className={styles.buttonRow}>
          <div className={styles.buttonWrap}>
            <Button big>SEND</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
