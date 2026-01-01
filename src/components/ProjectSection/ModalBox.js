import styles from "./ModalBox.module.css";
import Slideshow from "./Slideshow";

const ModalBox = ({ project }) => {
  return (
    <div style={{ overflowY: "auto", overflowX: "hidden" }}>
      {/* project info */}
      <div className="swiper-pagination" />
      <div className={styles.modalBody}>
        <div className={styles.rowModal}>
          <div className={styles.column}>
            <div className={styles.slide}>
              <Slideshow slides={project.slides} />
            </div>
          </div>
          <div className={styles.column}>
            <ul className={styles.briefContainer}>
              {project.brief.map((item, index) => (
                <li className={styles.listBrief}>{project.brief[index]}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
