import React, { forwardRef } from "react";

import styles from "./Button.module.css";

// Using forwardRef to enable setting focus to the instance of the component
// used in the MessageSentModal. The ref is handed down from the ContactForm
// component.
const Button = forwardRef(({ children, big, ...otherProps }, ref) => {
  return (
    <button
      className={`${styles.btn}${big ? " " + styles.btn__big : ""}`}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export default Button;
