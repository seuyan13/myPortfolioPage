import React from "react";
import styles from "./WorkContainer.module.css";
import Works from "./Works";
import {
  faCoffee,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function WorkContainer() {
  return (
    <section id="exprience" className={`${styles.workSection} pt-5 route`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className={styles.titleBox}>
              <h3 className={styles.title}>Experience</h3>
              <p className={styles.subtitle}>Expereiences & Activities</p>
              <div className={styles.line} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className={styles.timeline}>
              <Works
                icon={faCoffee}
                background="#ec5453"
                title="The Coffee Club - Front Of House"
                date="2021 - 2022"
                text="Better communication skills with customers and team members and learned how to deal with
                customers. Also, learned multi-tasking skills."
              />
              <Works
                icon={faHandHoldingHeart}
                background="#2c98f0"
                title="Red Cross - Volunteering"
                date="2020-2021"
                text="Personal growth with self-realization."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
