import React, { useState } from "react";
import styles from "./Education.module.css";

export default function Accordion({ label, title, listL, listR }) {
  const [isActive, setIsActive] = useState(false);
  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.contentBox} ${isActive ? styles.active : ""}`}
      onClick={handleAccordionClick}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.content}>
        <h5 style={{ textAlign: "center" }}>{title}</h5>
        <hr />
        <div className="row col-md-12">
          <div className={`${styles.eduContent} col-md-6`}>
            <ul>
              {listL.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.eduContent} col-md-6`}>
            <ul>
              {listR.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
