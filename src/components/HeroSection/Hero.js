import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./Hero.module.css";
import "bootstrap/dist/css/bootstrap.css";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typedElement = typedRef.current;
    const typed = new Typed(typedElement, {
      strings: ["web designer", "devloper"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero">
      <div className={styles.background}>
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <div className={styles.centered}>
            <h1 className={styles.heroTitle}>
              안녕하세요! <br />
              신입 개발자 양승운 입니다
              <p className={styles.subtitle}>
                <span
                  className="typed"
                  ref={typedRef}
                  data-typed-items="Web designer, developer"
                ></span>
              </p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
