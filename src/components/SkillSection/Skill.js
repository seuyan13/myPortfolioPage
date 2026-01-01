import styles from "./Skill.module.css";
import SkillBox from "./SkillBox";

function Skill() {
  const frontendSkills = [
    { src: "/svg/html5.svg", alt: "html" },
    { src: "/svg/css3.svg", alt: "css" },
    { src: "/svg/js.svg", alt: "javaScript" },
    { src: "/svg/react.svg", alt: "react" },
    { src: "/svg/tailwind.svg", alt: "tailwind" },
  ];

  const languageSkills = [
    { src: "/svg/CSharp.svg", alt: "CSharp" },
    { src: "/svg/java.svg", alt: "java" },
  ];

  const databaseSkills = [{ src: "/svg/mongodb.svg", alt: "mongodb" }];

  const versionControlSkills = [
    { src: "/svg/git.svg", alt: "git" },
    { src: "/svg/github.svg", alt: "github" },
  ];

  return (
    <section className={`${styles.aboutSection} pt-5 route`} id="skill">
      <div className="container">
        <div className="row">
          <div className="row-sm-12">
            <div className={styles.titleBox}>
              <h3 className={styles.title}>Skills</h3>
              <div className={styles.line} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.skillsContainer}>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className={`${styles.skillBoxRow} col-sm-3`}>
                <SkillBox title="Frontend" images={frontendSkills} />
              </div>
              <div className={`${styles.skillBoxRow} col-sm-3`}>
                <SkillBox title="Language" images={languageSkills} />
                <SkillBox title="DataBase" images={databaseSkills} />
              </div>
              <div className={`${styles.skillBoxRow} col-sm-3`}>
                <SkillBox
                  title="Version Control"
                  images={versionControlSkills}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.textbox}`}>
          <div>
            <h4>Frontend</h4>
            <ul>
              <li>HTML & CSS</li>
              <p>
                구조를 잘 이해하고 있으며 시맨틱 태그를 활용한 접근성 고려
                마크업과 Flexbox, Grid를 활용한 레이아웃 구현 그리고 미디어
                쿼리를 활용한 반응형 웹 제작을 할 수 있습니다.
              </p>
              <li>Tailwind</li>
              <p>
                커스텀 테마 설정 및 재사용 가능한 UI 컴포넌트 구성을 할 수
                있으며 반응형, 다크모드 등 Tailwind 유틸리티를 활용 할 수
                있습니다.
              </p>
              <li>JavaScript (ES6+) </li>
              <p>
                기본 문법과 동작 원리를 이해하고 있으며 AI 도구를 활용하여 요구
                사항에 맞는 기능을 구현할수 있습니다.
              </p>
              <li>React</li>
              <p>
                컴포넌트 구조와 상태 관리 개념을 이해하고 AI를 활용하여 UI와
                기능을 구현 & 개선할수 있습니다.
              </p>
            </ul>
          </div>
          <div>
            <h4>Language</h4>
            <ul>
              <li>C# (WinForm)</li>
              <p>데스크톱 UI 이벤트 처리 및 화면 구성 경험이 있습니다.</p>
              <li>Java (Android Studio)</li>
              <p>안드로이드 앱 UI 구성 및 이벤트 처리 경험이 있습니다.</p>
            </ul>
          </div>
          <div>
            <h4>DataBase</h4>
            <ul>
              <li>MongoDB</li>
              <p>기본적인 연결 방법과 CRUD 동작 원리를 이해하고 있습니다.</p>
            </ul>
          </div>
          <div>
            <h4>Version Control</h4>
            <ul>
              <li>Git & GitHub</li>
              <p>
                팀 협업 프로젝트에서 커밋, 브랜치 활용 및 코드 병합 경험이
                있습니다.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
