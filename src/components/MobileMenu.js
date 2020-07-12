import React from "react";
import { Link } from "gatsby";

import styles from "./MobileMenu.module.css";

const CloseIcon = props => (
  <svg
    viewBox="0 0 50 50"
    fillRule="evenodd"
    clipRule="evenodd"
    width="100%"
    height="100%"
    {...props}
  >
    <path d="M24.354 16.698a.387.387 0 00.556 0 674.872 674.872 0 014.776-4.84c3.559-3.559 7.388-7.005 9.759-9.383 1.696-1.7 4.736 2.001 5.887 3.153 1.35 1.349 1.922 2.457 2.742 3.583.751 1.031-2.171 3.02-3.501 4.35-1.469 1.469-7.974 7.775-11.48 11.211a.388.388 0 00.002.557c4.881 4.723 10.332 9.971 14.562 14.423 1.365 1.437-2.346 3.914-3.252 4.82-1.294 1.294-1.853 2.458-3.362 3.23-1.214.622-5.473-4.61-7.968-7.105-1.835-1.835-4.639-4.579-7.683-7.552a.387.387 0 00-.551.008c-4.657 4.82-9.81 10.179-14.197 14.337-1.429 1.355-4.056-2.113-5.001-3.058-1.349-1.349-2.535-2.319-3.359-3.875-.662-1.251 4.562-5.461 7.042-7.941a984.052 984.052 0 007.332-7.464.39.39 0 00-.006-.549 667.219 667.219 0 01-4.451-4.398c-3.581-3.581-7.056-7.424-9.448-9.809-1.711-1.706.668-2.894 1.772-3.999C5.819 5.103 8.08 2.856 9.167 2.076c.995-.713 3.019 2.205 4.357 3.543 1.415 1.414 7.297 7.472 10.83 11.079z" />
  </svg>
);

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
              <Link onClick={onCloseClick} to="/privacy">
                privacy
              </Link>
            </li>
            <li className={styles.menuitem}>
              <Link onClick={onCloseClick} to="/legal">
                legal notice
              </Link>
            </li>
            <li className={styles.menuitem}>
              <Link onClick={onCloseClick} to="/#contactForm">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
