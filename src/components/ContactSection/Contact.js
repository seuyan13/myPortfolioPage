import React from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import CV from "../../CV.pdf";

import {
  GeoAlt,
  Phone,
  Envelope,
  Linkedin,
  Github,
} from "react-bootstrap-icons";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className="row">
          <div className={styles.contactBox}>
            <h2 className={styles.contactTitle}>Get in Touch</h2>
            <div className="row" style={{ display: "flex" }}>
              <div className={styles.column1}>
                <ul className={styles.iconList}>
                  <li>
                    <span className={styles.iconCircle}>
                      <GeoAlt />
                    </span>
                    <span>2 Regatta Road, Torbay, Auckland</span>
                  </li>
                  <li>
                    <span className={styles.iconCircle}>
                      <Phone />
                    </span>
                    027 - 221 - 8317
                  </li>
                  <li>
                    <span className={styles.iconCircle}>
                      <Envelope />
                    </span>
                    <Link
                      to="#"
                      onClick={(e) => {
                        window.location.href = "mailto:yangswoon1203@gmail.com";
                        e.preventDefault();
                      }}
                      className={styles.linkEmail}
                    >
                      yangswoon1203@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.column2}>
                <div style={{ overflow: "auto" }}>
                  <ul className={styles.iconList}>
                    <li className={styles.linkerList}>
                      <Link
                        to={
                          "https://www.linkedin.com/in/seungwoon-yang-50b1981b4/"
                        }
                        target="_blank"
                      >
                        <span className={styles.iconLinker}>
                          <Linkedin />
                        </span>
                      </Link>
                    </li>
                    <li className={styles.linkerList}>
                      <Link to={"https://github.com/seuyan13"} target="_blank">
                        <span
                          className={styles.iconLinker}
                          style={{ color: "black" }}
                        >
                          <Github />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.cvContainer}>
                  <a
                    href={CV}
                    download="CV-SeungwoonYang"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.cv}
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
