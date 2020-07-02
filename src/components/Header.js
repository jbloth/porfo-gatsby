import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.headerMenu}>
        <ul className={styles.menuitems}>
          <li className={styles.menuitem}>work</li>
          <li className={styles.menuitem}>skills</li>
          <li className={styles.menuitem}>contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
