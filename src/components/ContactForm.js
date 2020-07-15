import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "./ContactForm.module.css";
import Button from "./Button";
import MessageSentModal from "./MessageSentModal";

/* Contact from component using netlify froms and formik inspired by:
  https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/
*/
const ContactForm = () => {
  const messageModalRef = useRef();
  const closeModalBtnRef = useRef();
  const [errorFlags, setErrorFlags] = useState({});
  const [successMsgOpen, setSuccessMsgOpen] = useState(false);
  const toggleSuccessMsgOpen = () => setSuccessMsgOpen(!successMsgOpen);

  // Make form inputs compatible with netlify forms
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

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
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-from", ...values }),
          })
            .then(() => {
              setSuccessMsgOpen(true);
              // Set focus to "OK" button on success-modal
              closeModalBtnRef.current.focus();
              actions.resetForm();
            })
            .catch(() => {
              alert("Error");
            })
            .finally(() => actions.setSubmitting(false));
        }}
        validate={values => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if (!values.name) {
            errors.name = "Name Required";
            setErrorFlags({ ...errorFlags, name: true });
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required";
            setErrorFlags({ ...errorFlags, email: true });
          }
          if (!values.message) {
            errors.message = "Message Required";
            setErrorFlags({ ...errorFlags, message: true });
          }
          const formErrors = errors;
          return formErrors;
        }}
      >
        {() => (
          <Form
            name="contact-from"
            data-netlify={true}
            netlify-honeypot="showStopper"
          >
            <div className={styles.formGroup}>
              <div className={styles.fieldGroup}>
                <Field
                  name="name"
                  aria-label="Name"
                  aria-required="true"
                  aria-invalid={!!errorFlags.name}
                  aria-describedby={errorFlags.name ? "nameError" : null}
                  placeholder="Name"
                  className={styles.formInput}
                />
                <p className={styles.errorMsg} id="nameError" role="alert">
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div className={styles.fieldGroup}>
                <Field
                  name="email"
                  aria-label="Email"
                  aria-required="true"
                  aria-invalid={!!errorFlags.email}
                  aria-describedby={errorFlags.email ? "emailError" : null}
                  placeholder="Email"
                  className={styles.formInput}
                />
                <p className={styles.errorMsg} id="emailError" role="alert">
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className={styles.noShow}>
                <Field
                  name="showStopper"
                  aria-label=""
                  placeholder="showStopper"
                  className={styles.formInput}
                />
                <p className={styles.errorMsg} role="alert">
                  <ErrorMessage name="showStopper" />
                </p>
              </div>

              <div className={styles.fieldGroup}>
                <Field
                  name="message"
                  aria-label="Message"
                  aria-required="true"
                  aria-invalid={!!errorFlags.message}
                  aria-describedby={errorFlags.message ? "messageError" : null}
                  placeholder="Message"
                  className={styles.formInput}
                  component="textarea"
                  rows="10"
                />
                <p className={styles.errorMsg} id="messageError" role="alert">
                  <ErrorMessage name="message" />
                </p>
              </div>
            </div>

            <div data-netlify-recaptcha="true"></div>

            <div className={styles.buttonRow}>
              <div className={styles.buttonWrap}>
                <Button type="submit" aria-haspopup="dialog" big>
                  SEND
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {successMsgOpen && (
        <MessageSentModal
          focusRef={closeModalBtnRef}
          modalRef={messageModalRef}
          onCloseClick={toggleSuccessMsgOpen}
        />
      )}
    </div>
  );
};

export default ContactForm;
