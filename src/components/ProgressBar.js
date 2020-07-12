import React from "react";

import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progressPercent }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: progressPercent + "%" }} />
      </div>
      <span className={styles.percent}>{progressPercent + "%"}</span>
    </div>
  );
};

export default ProgressBar;
