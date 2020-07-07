import React from "react";

import styles from "./Button.module.css";

const Button = ({ children, big, ...otherProps }) => {
  return (
    <button
      className={`${styles.btn}${big ? " " + styles.btn__big : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
