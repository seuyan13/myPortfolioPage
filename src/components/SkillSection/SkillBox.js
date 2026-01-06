import React from "react";
import styles from "./SkillBox.module.css";

function SkillBox({ title, images }) {
  const isFrontend = title === "Frontend";

  return (
    <div className={styles.skillBox}>
      <h4 className={styles.title}>{title}</h4>
      <hr />

      <div
        className={`${styles.iconContainer} ${
          isFrontend ? styles.frontendGrid : ""
        }`}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.imgBox}>
            <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillBox;
