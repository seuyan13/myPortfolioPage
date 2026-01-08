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
              <p className={styles.lead} style={{ marginTop: "1rem" }}>
                사용자 경험을 중심으로 UI를 구현하는 프론트엔드 개발자 / 웹
                퍼블리셔 입니다. <br /> <br />
                HTML, CSS, JavaScript, React를 기반으로 웹 인터페이스를
                구현하며, <br />
                구조와 동작 원리를 이해하는 것을 중요하게 생각합니다. <br />
                AI 도구를 적극 활용해 요구사항을 빠르게 구현하지만, <br />
                생성된 코드를 이해하고 프로젝트에 맞게 수정·개선하며 사용합니다.
                <br /> <br />팀 프로젝트에서 Git/GitHub를 활용한 협업 경험이
                있으며,
                <br />
                지속적인 학습과 개선을 통해 퍼블리싱과 프론트엔드 양쪽 모두에서
                성장 가능한 인재를 목표로 합니다.
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
