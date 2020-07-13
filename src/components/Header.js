import React, { useState } from "react";
import { Link } from "gatsby";

import styles from "./Header.module.css";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const BurgerIcon = props => {
  return (
    <svg
      viewBox="0 0 50 50"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M48.97 5.274c-3.699-.009-10.496.21-17.033.222-7.445.014-13.851-.144-19.102-.025-3.711.085-7.854-.032-9.825.041-.985.037-1.005 1.759-.989 4.067.018 2.486.138 5.572.924 5.618 1.976.114 5.579-.179 10.046.111 4.271.278 7.721.159 11.491.078 4.858-.105 10.129-.072 14.284-.107 4.635-.039 7.832-.15 10.039-.2.58-.013.304-3.218.317-5.756.012-2.357.525-4.047-.152-4.049z"
        transform="matrix(1.04057 0 0 1 -1.778 -3.226)"
      />
      <path
        d="M48.97 5.274c-3.699-.009-9.572.076-16.108.088-7.446.014-14.776-.01-20.027.109-3.711.085-7.871-.102-9.841-.029-.986.037-.644 2.805-.628 5.113.018 2.486-.334 4.757.452 4.803 1.976.114 4.395.126 9.489.065 4.279-.051 8.405.044 12.175-.037 4.858-.105 10.129-.072 14.284-.107 4.635-.039 7.832-.15 10.039-.2.58-.013.304-3.218.317-5.756.012-2.357.525-4.047-.152-4.049z"
        transform="matrix(1.04057 0 0 1 -1.778 14.374)"
      />
      <path
        d="M48.97 5.274c-3.699-.009-10.496.21-17.033.222-3.113.006-6.491-.098-9.232-.119a304.73 304.73 0 00-9.87.094c-3.711.085-7.503-.142-9.474-.069-.985.036-.567 2.199-.551 4.508.018 2.486-.3 5.131.486 5.176 1.976.114 5.228-.068 9.695.222 4.271.278 7.721.159 11.491.078 4.858-.105 10.128-.082 14.284-.107 4.635-.028 7.798.212 10.01.014.577-.052.454-3.108.467-5.646.012-2.357.404-4.371-.273-4.373z"
        transform="matrix(-1.04056 .00372 -.00358 -1 52.117 52.638)"
      />
    </svg>
  );
};

const Header = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  const toggleMobMenuOpen = () => setMobMenuOpen(!mobMenuOpen);

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className={styles.headerMenu}>
        <ul className={styles.menuitems}>
          <li className={styles.menuitem}>
            <Link to="/#about">about</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to="/#projects">work</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to="/#contactForm">contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.iconContainer}>
        <BurgerIcon onClick={toggleMobMenuOpen} />
      </div>
      {mobMenuOpen && <MobileMenu onCloseClick={toggleMobMenuOpen} />}
    </header>
  );
};

export default Header;
