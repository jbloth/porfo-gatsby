import React from "react";
import { Link } from "gatsby";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">WOBWOBWEB</Link>
      </div>
      <nav className={styles.headerMenu}>
        <ul className={styles.menuitems}>
          <li className={styles.menuitem}>work</li>
          <li className={styles.menuitem}>skills</li>

          <li className={styles.menuitem}>
            <Link to="/#contactForm">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
