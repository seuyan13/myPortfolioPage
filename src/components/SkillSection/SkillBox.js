import React from "react";
import styles from "./Skill.module.css";

function SkillBox({ title, images, onClick }) {
  return (
    <div className={styles.skillBox}>
      <h4>{title}</h4>
      <hr />
      {images.map((image, index) => (
        <div className={styles.imgBox} key={index}>
          <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default SkillBox;
