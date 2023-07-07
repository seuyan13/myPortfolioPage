import React, { useState, useEffect } from "react";
import styles from "./ProjectContainer.module.css";
import { PlusCircle } from "react-bootstrap-icons";
import { ModalBoxContainer } from "./ModalBoxContainer";
import { useLocation } from "react-router-dom";

const ProjectBrief = ({ imgSrc, title, group, date, modalId }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);
  const { pathname } = useLocation();

  const openModal = (modal) => {
    setSelectedModal(modal);
    setShowModal(true);
  };

  useEffect(() => {
    if (pathname !== "/project") {
      setShowModal(false);
    }
  }, [pathname]);

  return (
    <div className="col-md-4">
      <div className={styles.projectBox}>
        <div>
          <div className={styles.projectImg}>
            <img src={imgSrc} alt="img" className="img-fluid" />
          </div>
          <div className={styles.projectContent}>
            <div className="row">
              <div className="col-sm-8">
                <h2 className={styles.PTitle}>{title}</h2>
                <div className={styles.more}>
                  <span className={styles.group}>{group}</span> /{" "}
                  <span className={styles.Date}>{date}</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className={styles.btnBox}>
                  <button
                    onClick={() => openModal(modalId)}
                    className={styles.projectBtn}
                  >
                    <span>
                      <PlusCircle />
                    </span>
                  </button>
                  {showModal && (
                    <ModalBoxContainer
                      setShowModal={setShowModal}
                      selectedModal={selectedModal}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBrief;
