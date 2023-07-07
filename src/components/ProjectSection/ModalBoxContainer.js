import React, { useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "./ModalBox.module.css";
import ModalBox from "./ModalBox";
import { projectsData } from "./ProjectData";

export const ModalBoxContainer = ({ setShowModal, selectedModal, project }) => {
  const selectedProject = projectsData.find(
    (project) => project.id === selectedModal
  );

  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModalClickOutside = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // background unscrollable when the modalBox is opened
  const handleScroll = useCallback((event) => {
    event.preventDefault();
  }, []);

  // open selected Modal Box
  const modalContent = selectedProject ? (
    <ModalBox project={selectedProject} />
  ) : (
    <div />
  );

  useEffect(() => {
    if (setShowModal) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("scroll", handleScroll, {
        passive: false,
      });
    } else {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, setShowModal]);

  return ReactDOM.createPortal(
    <div
      className={styles.container}
      ref={modalRef}
      onClick={closeModalClickOutside}
    >
      <div className={styles.modalBox}>
        <div className={styles.header}>
          <h2 style={{ margin: "1rem", fontWeight: "bolder" }}>
            {selectedProject.title}
          </h2>
          <button
            className={styles.closeBtn}
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
        {modalContent}
      </div>
    </div>,
    document.getElementById("portal")
  );
};
