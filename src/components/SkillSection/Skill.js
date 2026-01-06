import styles from "./Skill.module.css";
import SkillBox from "./SkillBox";
import { useState } from "react";

function Skill() {
  const skillData = [
    {
      title: "Frontend",
      images: [
        { src: "/svg/html5.svg", alt: "html" },
        { src: "/svg/css3.svg", alt: "css" },
        { src: "/svg/js.svg", alt: "javascript" },
        { src: "/svg/react.svg", alt: "react" },
        { src: "/svg/nextjs.svg", alt: "next.js" },
        { src: "/svg/tailwind.svg", alt: "tailwind css" },
        { src: "/svg/styledcomponents.svg", alt: "styled-components" },
      ],
    },
    {
      title: "Backend",
      images: [
        { src: "/svg/nodejs.svg", alt: "nodejs" },
        { src: "/svg/Express.svg", alt: "express" },
        { src: "/svg/mongodb.svg", alt: "mongodb" },
      ],
    },
    {
      title: "Language",
      images: [
        { src: "/svg/java.svg", alt: "java" },
        { src: "/svg/CSharp.svg", alt: "CSharp" },
      ],
    },
    {
      title: "Dev Tools",
      images: [
        { src: "/svg/vscode.svg", alt: "vscode" },
        { src: "/svg/github.svg", alt: "github" },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const prevIndex = (index - 1 + skillData.length) % skillData.length;
  const nextIndex = (index + 1) % skillData.length;

  const goTo = (newIndex) => {
    setDirection(newIndex > index ? "right" : "left");
    setIndex(newIndex);
  };

  return (
    <section className={styles.aboutSection} id="skill">
      <div className="container">
        <div className={styles.titleBox}>
          <h3 className={styles.title}>Skills</h3>
          <div className={styles.line} />
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.carousel}>
            <button className={styles.arrow} onClick={() => goTo(prevIndex)}>
              &lt;
            </button>

            <div className={styles.cards}>
              {/* LEFT */}
              <div
                className={`${styles.card} ${styles.side}`}
                onClick={() => goTo(prevIndex)}
              >
                <SkillBox {...skillData[prevIndex]} />
              </div>

              {/* ACTIVE */}
              <div
                key={index}
                className={`${styles.card} ${styles.active} ${styles[direction]}`}
              >
                <SkillBox {...skillData[index]} />
              </div>

              {/* RIGHT */}
              <div
                className={`${styles.card} ${styles.side}`}
                onClick={() => goTo(nextIndex)}
              >
                <SkillBox {...skillData[nextIndex]} />
              </div>
            </div>

            <button className={styles.arrow} onClick={() => goTo(nextIndex)}>
              &gt;
            </button>
          </div>
        </div>

        <div className={`${styles.textbox}`}>
          {index === 0 && (
            <div>
              <ul className="frontend">
                <li>HTML5</li>
                <p>
                  구조를 잘 이해하고 있으며 시맨틱 태그를 활용한 접근성 고려
                  마크업과 Flexbox, Grid를 활용한 레이아웃 구현이 가능합니다.
                  <br /> 또한 미디어 쿼리를 활용한 반응형 웹 제작을 할 수
                  있습니다.
                </p>
                <li>CSS & Tailwind & styled Components</li>
                <p>
                  CSS의 기본 구조를 잘 이해하고 있으며 기본 스타일링 가능하며,
                  <br />
                  Tailwind와 Styled Components를 활용하여 커스텀 테마 적용 및
                  재사용 가능한 UI 컴포넌트 구성을 할 수 있으며 반응형 웹 구현
                  가능합니다.
                </p>
                <li>JavaScript (ES6+) </li>
                <p>
                  최신 문법과 동작원리를 포함하여 비동기 처리, 모듈화, 이벤트
                  핸들링 등 핵심 개념을 깊이 이해하고 있으며 원하는 기능을
                  효과적으로 구현할 수 있습니다.
                </p>
                <li>React</li>
                <p>
                  컴포넌트 구조와 상태 관리 개념, Hooks, Context API를 이해하고
                  있으며 실제 프로젝트에서 UI/UX 개선 및 기능 구현 경험이
                  있습니다.
                  <br />
                  또한, AI 도구를 활용하여 요구 사항에 맞는 기능을 빠르게 구현
                  및 최적화 할수 있습니다.
                </p>
              </ul>
            </div>
          )}
          {index === 1 && (
            <div>
              <ul className="backend">
                <li>Node.js</li>
                <p>
                  서버 환경과 이벤트 기반 비동기 처리를 이해하고 있으며,
                  <br />
                  간단한 API서버 및 백엔드 로직을 구현할 수 있습니다.
                </p>
                <li>Express.js</li>
                <p>
                  Express를 이용한 RESTful API 설계, 라우팅, 미들웨어 활용을
                  이해하고 있습니다.
                  <br />
                  FastAPI의 기본 개념을 이해하고 AI 도구를 활용하여 기본적인 API
                  설계를 수행할 수 있습니다.
                </p>
                <li>MongoDB</li>
                <p>
                  데이터베이스의 기본 개념과 연결 방법, CRUD 동작 원리를
                  이해하고 있습니다.
                  <br />
                  Mongoose를 이용한 간단한 모델 설계 및 데이터 연동을 할 수
                  있습니다.
                </p>
              </ul>
            </div>
          )}

          {index === 2 && (
            <div>
              <ul className="Language">
                <li>Java / Java (Android)</li>
                <p>
                  Java의 객체지향 프로그래밍(OOP) 기반 개발을 이해하고 있습니다.{" "}
                  <br />
                  기본 라이브러리와 API를 사용하여 콘솔 및 GUI 애플리케이션을
                  구현할 수 있습니다.
                  <br />
                  또한 Android Studio를 활용한 실무 프로젝트 경험도 보유하고
                  있습니다.
                </p>
                <li>C# (Windows Forms)</li>
                <p>
                  Windows Forms에서의 이벤트 기반 UI 구성과 데이터 연동 구현이
                  가능합니다.
                </p>
              </ul>
            </div>
          )}
          {index === 3 && (
            <div>
              <ul className="DevTools">
                <li>VScode</li>
                <p>
                  다양한 언어와 프레임워크에서 편리하게 코드 작성 및 디버깅
                  가능하며,
                  <br />
                  Prettier과 Thunder Client등 여러 플러그인과 확장 기능을
                  능숙하게 활용하여 효율적인 개발 환경 구축 할수 있습니다.
                </p>
                <li>Github</li>
                <p>
                  팀 협업 프로젝트에서 커밋, 브랜치 활용 및 코드 병합 경험이
                  있습니다.
                </p>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skill;
