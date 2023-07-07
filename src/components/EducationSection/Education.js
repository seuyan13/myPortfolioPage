import React from "react";
import Accordion from "./Accordion";
import styles from "./Education.module.css";

function Education() {
  const accordionData = [
    {
      label: "Bachelor degree at the Massey University",
      title: "February 2021 - June 2023 | Software Engineering Major",
      listL: [
        "Application Software Development",
        "Algorithms and Data Structures",
        "Software Engineering Design and Construction",
        "Software Architecture",
      ],
      listR: [
        "Artificial Intelligence",
        "Programming Project",
        "Mobile Application Development",
      ],
    },
    {
      label: "Diploma degree at the Waikato Institute of Technology",
      title: "February 2019 - November 2020 | Software Engineering Major",
      listL: [
        "Object Oriented Programming",
        " Web Development",
        "Database Modelling and SQL",
      ],
      listR: [
        "Mathematics for Programming",
        "Data Structures and Algorithms",
        "Application Development",
        "Fundamentals of Programming and Problem Solving",
      ],
    },
  ];

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

        {/* accordion*/}
        <div className="row">
          <div className={styles.accordion}>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                label={item.label}
                title={item.title}
                listL={item.listL}
                listR={item.listR}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
