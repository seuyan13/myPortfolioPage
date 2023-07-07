import React from "react";
import styles from "./WorkContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Works({ icon, background, title, date, text }) {
  return (
    <article className={styles.timelineEntry}>
      <div className={styles.timelineEntryInner}>
        <div className={styles.timelineIcon} style={{ background }}>
          <FontAwesomeIcon icon={icon} style={{ color: "#fff" }} />
        </div>
      </div>
      <div className={styles.timelineLabel}>
        <h2>
          {title}
          <span className={styles.WorkingPeriod}>{date}</span>
        </h2>
        <p>{text}</p>
      </div>
    </article>
  );
}
