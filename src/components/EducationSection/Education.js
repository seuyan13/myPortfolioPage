import React from "react";
import styles from "./Education.module.css";

function Education() {
  return (
    <section id="edu" className={`${styles.eduSection} pt-5 route`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className={styles.titleBox}>
              <h3 className={styles.title}>Education</h3>
              <div className={styles.line} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className={styles.timeline}>
              {[
                {
                  year: "2020",
                  uni: "Waikato Institute of Technology",
                  degree: "Diploma",
                },
                {
                  year: "2021 - 2023",
                  uni: "Massey University",
                  degree: "Bachelor",
                },
              ].map((item, index) => (
                <h3 key={index}>
                  <span className={styles.circle}>&#9675;</span>
                  <span className={styles.uni}>{item.uni}</span>{" "}
                  <span className={styles.year}>{item.year}</span>
                  <p className={styles.degree}>{item.degree}</p>
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
