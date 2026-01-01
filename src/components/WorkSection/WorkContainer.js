import React from "react";
import styles from "./WorkContainer.module.css";
import Works from "./Works";
import {
  faHandHoldingHeart,
  faLaptopCode,
  faMobile,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function WorkContainer() {
  return (
    <section id="exprience" className={`${styles.workSection} pt-5 route`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className={styles.titleBox}>
              <h3 className={styles.title}>Experience</h3>
              <div className={styles.line} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className={styles.timeline}>
              <Works
                icon={faUsers}
                background="#000000"
                title="의무 복무"
                date="2025.12"
                text={<>대한민국 육군 만기 전역.</>}
              />
              <Works
                icon={faLaptopCode}
                background="#e066ff"
                title="MegaBliss - Intern (Front-end)"
                date="2023.8 - 2023.12"
                text={
                  <>
                    신생 스타트업에서 프론트엔드 개발자 인턴으로 근무하며
                    React.js를 이용한 웹 애플리케이션 개발에 동참하였습니다.
                    <br /> 주요 업무로는 UI 컴포넌트 개발, API 통합, 반응형
                    디자인 구현 등이 있었습니다.
                  </>
                }
              />

              <Works
                icon={faMobile}
                background="#ec5453"
                title="Timber Smart - App Developer Intern"
                date="2021 - 2022"
                text={
                  <>
                    졸업전 약 6개월 동안 안드로이드 앱 개발 인턴으로 근무하며
                    실무 경험을 쌓았습니다. <br />
                    안드로이드 스튜디오를 활용하여 바코드 스캐너를 통한 자재
                    관리 어플을 만들었으며 UI & 스캐너 구현에 참여하였습니다.
                  </>
                }
              />
              <Works
                icon={faHandHoldingHeart}
                background="#2c98f0"
                title="Red Cross - Volunteering"
                date="2020-2021"
                text="뉴질랜드 적십자에서 봉사를 하며 지역 사회에 기여하고 다양한 사람들과 협력하는 경험을 쌓았습니다. "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
