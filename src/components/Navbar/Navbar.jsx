import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getimageUrl } from "../../utils";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={`${styles.menuBtn}`} // Add the menuBtn class here
          src={
            menuOpen
              ? getimageUrl("nav/close.png")
              : getimageUrl("nav/hammenu.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen} `}
          onClick={() => setMenuOpen(true)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
