import React, { useState, useEffect } from "react";
import styles from "./Skill.module.css";
import SkillBox from "./SkillBox";
import { useLocation } from "react-router-dom";

function Skill() {
  const [showFullScreen, setShowFullScreen] = useState(false);
  const { pathname } = useLocation();

  const frontendSkills = [
    { src: "/svg/html5.svg", alt: "html" },
    { src: "/svg/css3.svg", alt: "css" },
    { src: "/svg/js.svg", alt: "javaScript" },
    { src: "/svg/react.svg", alt: "react" },
    { src: "/svg/scss.svg", alt: "scss" },
  ];

  const languageSkills = [
    { src: "/svg/dotNetCore.png", alt: "dotNetCore" },
    { src: "/svg/java.svg", alt: "java" },
  ];

  const databaseSkills = [{ src: "/svg/mysql.svg", alt: "mysql" }];

  const versionControlSkills = [
    { src: "/svg/git.svg", alt: "git" },
    { src: "/svg/github.svg", alt: "github" },
    { src: "/svg/docker.svg", alt: "docker" },
  ];

  const certificateSkills = [{ src: "/img/mta-js.png", alt: "mta-js" }];

  function openFullScreenImage(src) {
    const certificateImage = certificateSkills.find(
      (image) => process.env.PUBLIC_URL + image.src === src
    );
    if (certificateImage) {
      setShowFullScreen(true);
    }
  }

  function closeFullScreenImage() {
    setShowFullScreen(false);
  }

  useEffect(() => {
    if (pathname !== "/skill") {
      setShowFullScreen(false);
    }
  }, [pathname]);

  return (
    <section className={`${styles.aboutSection} pt-5 route`} id="skill">
      <div className="container">
        <div className="row">
          <div className="row-sm-12">
            <div className={styles.titleBox}>
              <h3 className={styles.title}>Skills</h3>
              <p className={styles.subtitle}>Skills that I possess</p>
              <div className={styles.line} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.skillsContainer}>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className={`${styles.skillBoxRow} col-sm-3`}>
                <SkillBox
                  title="Frontend"
                  images={frontendSkills}
                  onClick={openFullScreenImage}
                />
              </div>
              <div className={`${styles.skillBoxRow} col-sm-3`}>
                <SkillBox
                  title="Language"
                  images={languageSkills}
                  onClick={openFullScreenImage}
                />
                <SkillBox
                  title="DataBase"
                  images={databaseSkills}
                  onClick={openFullScreenImage}
                />
              </div>
              <div className={`${styles.skillBoxRow} col-sm-3`}>
                <SkillBox
                  title="Version Control"
                  images={versionControlSkills}
                  onClick={openFullScreenImage}
                />
                {/*<SkillBox
                  title="Certificate"
                  images={certificateSkills}
                  onClick={openFullScreenImage}
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFullScreen && (
        <div
          className={styles.fullScreenImage}
          onClick={closeFullScreenImage}
          style={{ cursor: "zoom-out" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/img/mta-js.png"}
            alt="certificate"
          />
        </div>
      )}
    </section>
  );
}

export default Skill;
