import React from "react";
import Accordion from "./Accordion";
import styles from "./Education.module.css";

function Education() {
  const accordionData = [
    {
      label: "Bachelor degree at the Massey University",
      title: "February 2021 - June 2023 | Software Engineering Major",
      eduBrief:
        "Studied more deep, various programing algorithms also learned more practical skills using Java, C++ and C#",
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
      eduBrief:
        "Learned various basic concepts of programming skills and algorithms as well",
      listL: [
        "Object Oriented Programming",
        " Web Development",
        "Database Modelling and SQL",
      ],
      listR: ["Data Structures and Algorithms", "Application Development"],
    },
    {
      label: "Other learning",
      title: "Online learning",
      eduBrief:
        "To be a better developer, I am doing the personal study not only the Uni study",
      listL: [
        "Java Programming: Solving Problems with Software - Coursera",
        "Programming Foundations with JavaScript, HTML and CSS - Coursera",
      ],
      listR: ["React.js Essential Training - LinkedIn Learning"],
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
                eduBrief={item.eduBrief}
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
