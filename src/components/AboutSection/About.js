import React from "react";
import styles from "./About.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGears,
  faMobileAndroidAlt,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className={`${styles.aboutSection} sect-pt4 route`} id="about">
      <div className="container">
        <div className={styles.aboutBox}>
          <div style={{ marginBottom: "3rem" }}>
            <h5 className={styles.sectionTitle}>About me</h5>
          </div>

          <div className={`row ${styles.row}`}>
            <div className={`${styles.profileImgContainer} col-sm-4`}>
              <img
                src={process.env.PUBLIC_URL + "/img/profile.jpg"}
                alt="profilePhoto"
                className={styles.profileImg}
              ></img>
            </div>
            <div className="col-sm-8">
              <p className={styles.lead}>
                Hello, I am Seungwoon Yang who dreams developer that
                continuously learning and improving.{" "}
                <div style={{ marginTop: "1rem" }} />
                My real passion for designing and developing useful software is
                what drives me to pursue it. My strength is having a high level
                of attention to detail about the task given and keeping a
                commitment to completion. In addition, I constantly study to
                become a better developer all the time. These qualities with
                positive energy will greatly help me work with other
                professional developers.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className={styles.expertise}
              style={{ borderBottom: "2px solid #ec5453" }}
            >
              <span className={styles.expertiseIcon}>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  style={{ color: "#ec5453" }}
                />
              </span>
              <h3 className={styles.expertiseTitle}>Web Design</h3>
            </div>

            <div
              className={styles.expertise}
              style={{ borderBottom: "2px solid #f9bf3f" }}
            >
              <span className={styles.expertiseIcon}>
                <FontAwesomeIcon icon={faGears} style={{ color: "#f9bf3f" }} />
              </span>
              <h3 className={styles.expertiseTitle}>Software</h3>
            </div>

            <div className={styles.expertise}>
              <span className={styles.expertiseIcon}>
                <FontAwesomeIcon icon={faMobileAndroidAlt} />
              </span>
              <h3 className={styles.expertiseTitle}>Application</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
