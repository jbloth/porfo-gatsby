import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "./ContactForm.module.css";
import Button from "./Button";

const ContactForm = ({ lightTheme = true }) => {
  return (
    <div>
      <h2>Contact</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validate={values => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if (!values.name) {
            errors.name = "Name Required";
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required";
          }
          if (!values.message) {
            errors.message = "Message Required";
          }
          return errors;
        }}
      >
        {() => (
          <Form>
            <div className={styles.formGroup}>
              <div className={styles.fieldGroup}>
                <Field
                  name="name"
                  aria-label="Name"
                  placeholder="Name"
                  className={styles.formInput}
                />
                <p className={styles.errorMsg}>
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div className={styles.fieldGroup}>
                <Field
                  name="email"
                  aria-label="Email"
                  placeholder="Email"
                  className={styles.formInput}
                />
                <p className={styles.errorMsg}>
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className={styles.fieldGroup}>
                <Field
                  name="message"
                  aria-label="Message"
                  placeholder="Message"
                  className={styles.formInput}
                  component="textarea"
                  rows="10"
                />
                <p className={styles.errorMsg}>
                  <ErrorMessage name="message" />
                </p>
              </div>
            </div>

            <div className={styles.buttonRow}>
              <div className={styles.buttonWrap}>
                <Button type="submit" big>
                  SEND
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* <form method="post" action="#">
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
      </form> */}
    </div>
  );
};

export default ContactForm;
