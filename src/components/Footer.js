import React from "react";
import { Link } from "gatsby";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <nav className={styles.footerMenu}>
        <ul className={styles.menuitems}>
          <li className={styles.menuitem}>
            <Link to="/privacy" className={styles.footerLink}>
              Privacy Note
            </Link>
          </li>
          <li className={styles.menuitem}>
            <Link to="/legal" className={styles.footerLink}>
              Legal Note
            </Link>
          </li>
          <li className={styles.menuitem}>
            <Link to="/#contactForm" className={styles.footerLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
