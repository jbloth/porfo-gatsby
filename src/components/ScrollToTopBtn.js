import React, { useState, useEffect } from "react";

import styles from "./ScrollToTopBtn.module.css";
// import ArrowUp from "../assets/graphics/arrow-up_wiggly.svg";
// import { ReactComponent as ArrowUp } from "../assets/graphics/arrow-up_wiggly.svg";

const ArrowUp = props => (
  <svg viewBox="0 0 50 50" width="100%" height="100%" {...props}>
    <path
      d="M20.054 28.373c.021-1.041-2.205-.657-5.081.254-1.511.479-4.675 2.332-4.517 1.486.167-.89 1.031-2.447 2.13-4.494 1.871-3.482 4.465-8.106 5.755-11.275 1.809-4.445 4.747-9.889 6.042-12.227a.74.74 0 01.649-.374.741.741 0 01.647.377c.819 1.471 2.191 3.961 2.771 5.154 1.154 2.379 3.178 7.69 5.527 12.71 1.602 3.421 3.334 6.698 4.341 8.558a.718.718 0 01-.085.812.77.77 0 01-.806.235l-6.136-1.831a1.204 1.204 0 00-1.049.176 1.132 1.132 0 00-.472.927c.03 2.455.078 7.19.031 9.703-.055 2.934-.319 8.013-.42 9.886a.751.751 0 01-.781.698c-.734-.02-1.877-.048-2.777-.046a93.344 93.344 0 01-5.174-.144.77.77 0 01-.523-.251.729.729 0 01-.185-.537c.071-1.113.188-3.37.163-6.003-.029-3.144-.084-6.2.021-7.86.238-3.799-.096-4.732-.071-5.934z"
      transform="matrix(1 0 0 1.03003 0 -.99)"
    />
  </svg>
);

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (!visible && window && window.pageYOffset > 500) {
      setVisible(true);
    } else if (visible && window && window.pageYOffset <= 500) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  });

  return (
    <button
      className={`${styles.scrollTopBtn} ${
        visible ? styles.scrollTopBtn__active : ""
      }
      `}
      onClick={scrollTop}
    >
      <div className={styles.iconContainer}>
        <ArrowUp />
      </div>
    </button>
  );
};

export default ScrollToTopBtn;
