import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [click, setClick] = useState(false);

  //change navbar color when scroll moves
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: scrollPosition > 0 ? "black" : "transparent",
  };

  // navbar link
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50;
      const y = element.offsetTop + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // toggleBtn
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header id="header" className="fixed-top" style={navbarStyle}>
      <nav id="navbar" className={styles.navbar}>
        <h2 className={styles.logo} >Portfolio</h2>
        <ul className={`${styles.navbar_ul} ${click ? styles.active : ""}`}>
          <li className={styles.navbar_li}>
            <Link
              to="/hero"
              activeClassName="active"
              className="nav-link"
              onClick={() => scrollToSection("hero")}
            >
              Home
            </Link>
          </li>
          <li className={styles.navbar_li}>
            <Link
              to="/about"
              activeClassName="active"
              className="nav-link"
              onClick={() => scrollToSection("about")}
            >
              About
            </Link>
          </li>
          <li className={styles.navbar_li}>
            <Link
              to="/skill"
              activeClassName="active"
              className="nav-link"
              onClick={() => scrollToSection("skill")}
            >
              Skills
            </Link>
          </li>
          <li className={styles.navbar_li}>
            <Link
              to="/edu"
              activeClassName="active"
              className="nav-link"
              onClick={() => scrollToSection("edu")}
            >
              Education
            </Link>
          </li>
          <li className={styles.navbar_li}>
            <Link
              to="/exprience"
              activeClassName="active"
              className="nav-link"
              onClick={() => scrollToSection("exprience")}
            >
              Expereience
            </Link>
          </li>
          <li className={styles.navbar_li}>
            <Link
              to="/project"
              activeClassName="active"
              className="nav-link"
              onClick={() => scrollToSection("project")}
            >
              Project
            </Link>
          </li>
          <li className={styles.navbar_li}>
            <Link
              to="/contact"
              activeClassName="active"
              className="nav-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* toggle bar for small screen size*/}
        <div
          className={`${styles.toggleBtn} ${click ? styles.active : ""}`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
