import React, { useState, useEffect } from "react";
import styles from "./ModalBox.module.css";
import { Circle, CircleFill } from "react-bootstrap-icons";

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className={styles.slider}>
      <div className={styles.slideContainer}>
        <div style={slideStyles} />
      </div>
      <div className={styles.arrowsContainer}>
        <div className={styles.leftArrow} onClick={goToPrevious}>
          {" "}
          &#10094;
        </div>
        <div className={styles.rightArrow} onClick={goToNext}>
          {" "}
          &#10095;
        </div>
      </div>
      <div className={styles.dotContainer}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles.dot}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {slideIndex === currentIndex ? <CircleFill /> : <Circle />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
