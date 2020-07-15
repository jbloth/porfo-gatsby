import React from "react";
import { Link } from "gatsby";

import styles from "./MobileMenu.module.css";
import CloseIcon from "./icons/CloseIcon";

const MobileMenu = ({ onCloseClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <CloseIcon onClick={onCloseClick} />
      </div>
      <div className={styles.contentContainer}>
        <nav>
          <ul className={styles.menuitems}>
            <li className={styles.menuitem}>
              <Link onClick={onCloseClick} to="/">
                home
              </Link>
            </li>
            <li className={styles.menuitem}>
              <Link onClick={onCloseClick} to="/#about">
                about
              </Link>
            </li>
            <li className={styles.menuitem}>
              <Link onClick={onCloseClick} to="/#projects">
                work
              </Link>
            </li>
            <li className={styles.menuitem}>
              <Link onClick={onCloseClick} to="/#contactForm">
                contact
              </Link>
            </li>
            <li className={styles.menuitem}>
              <Link onClick={onCloseClick} to="/privacy">
                privacy
              </Link>
            </li>
            <li className={styles.menuitem}>
              <Link onClick={onCloseClick} to="/legal">
                legal notice
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
