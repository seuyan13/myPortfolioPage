import React, { useState } from "react";
import styles from "./ProjectContainer.module.css";
import CategoryBtn from "./CategoryBtn";
import ProjectBrief from "./ProjectBrief";
import { projectsData } from "./ProjectData";

function ProjectContainer() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="project" className={`${styles.projectSection} sect-pt4 route`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className={styles.titleBox}>
              <h3 className={styles.title}>Portfolio</h3>
              <p className={styles.subtitle}>My Works and Projects</p>
              <div className={styles.line} />
            </div>
          </div>
          <CategoryBtn onSelectCategory={handleCategorySelect} />
        </div>

        <div className="row">
          {filteredProjects.map((project) => (
            <ProjectBrief
              key={project.id}
              imgSrc={project.imgSrc}
              title={<span className={styles.briefTitle}>{project.title}</span>}
              group={<span className={styles.briefGroup}>{project.group}</span>}
              date={<span style={{ color: "#1E90FF" }}>{project.date}</span>}
              modalId={project.modalId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectContainer;
