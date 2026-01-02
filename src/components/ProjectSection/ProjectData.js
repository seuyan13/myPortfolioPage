export const projectsData = [
  {
    id: "modal1",
    category: "App",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/BarcodeScannerApp/logo.png",
    title: "BarcodeScanner",
    group: "Team Project",
    date: "2021.7 - 2021.11",
    modalId: "modal1",
    slides: [
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/BarcodeScannerApp/main.jpg",
      },
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/BarcodeScannerApp/menu.jpg",
      },
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/BarcodeScannerApp/scan.jpg",
      },
    ],
    brief: [
      "TimberSmart에서 인턴 활동을 하면서 개발하던 프로젝트입니다.",
      "자바와 안드로이드 스튜디오를 활용하여 안드로이드 기기에서 사용가능한 바코드 스캐너를 개발하였습니다.",
      "단순히 바코드를 스캔하는것 뿐만 아니라 각각의 바코드를 스캔,저장,검색,공유기능 등을 통해 마트에서 사용 가능한 앱입니다.",
      "4명으로 이루어진 팀에 참여하여 스캔&저장 기능의 개발을 담당 하였으며 성공적으로 프로젝트를 끝냈습니다.",
    ],
  },
  {
    id: "modal2",
    category: "App",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/GalleryApp/main.jpg",
    title: "Gallery App",
    group: "Personal Project",
    date: "2022.7 - 2022.8",
    modalId: "modal2",
    slides: [
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/GalleryApp/menu.jpg",
      },
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/GalleryApp/videoPlayer.jpg",
      },
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/GalleryApp/speedOptions.jpg",
      },
    ],
    brief: [
      "웹개발을 공부하던 당시 실력 향상을 위해 만든 개인프로젝트입니다.",
      "자바와 안드로이드 스튜디오를 이용하여 만든 안드로이드 기기에서 사용가능한 갤러리앱니다.",
      "사진과 동영상중 원하는 파일만 보여주는 기능과 좋아하는 사진들만 따로 저장 후 보여주는 기능, 동영상의 재생 속도 조절 기능을 구현하였습니다.",
    ],
  },
  {
    id: "modal3",
    category: "Web",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/Portfolio/Portfolio.png",
    title: "Portfolio",
    group: "Personal Project",
    date: "",
    modalId: "modal3",
    slides: [
      { url: process.env.PUBLIC_URL + "/ProjectImg/Portfolio/Portfolio.png" },
    ],
    brief: ["싱글 페이지 형식의 포트폴리오 사이트 프로젝트입니다."],
  },
  {
    id: "modal4",
    category: "Web",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/TodoList/main.png",
    title: "Todo List",
    group: "Personal Project",
    date: "2023.1 - 2023.2",
    modalId: "modal4",
    slides: [
      { url: process.env.PUBLIC_URL + "/ProjectImg/TodoList/main.png" },
      { url: process.env.PUBLIC_URL + "/ProjectImg/TodoList/paging.png" },
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/TodoList/selectFunction.png",
      },
    ],
    brief: [
      "처음 React를 공부하며 만들어본 Todo List입니다.",
      "기본적인 입력 & 삭제 기능과 페이지네이션과 전체 선택 기능을 구현했습니다.",
    ],
  },
  {
    id: "modal5",
    category: "Web",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/NewsApp/main.png",
    title: "News App",
    group: "Personal Project",
    date: "May.2023",
    modalId: "modal5",
    slides: [
      { url: process.env.PUBLIC_URL + "/ProjectImg/NewsApp/main.png" },
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/NewsApp/searchBar.png",
      },
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/NewsApp/toggleMenu.png",
      },
    ],
    brief: [
      "API 연동을 통해 만든 뉴스 앱입니다.",
      "뉴스API를 활용하여 최신 뉴스들을 받아와 보여주며, 카테고리별 뉴스 조회, 페이지 네이션과 키워드 검색 기능을 구현하였습니다.",
    ],
  },
  {
    id: "modal6",
    category: "Web",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/Company/login.png",
    title: "Web site",
    group: "Personal Project",
    date: "2024.10 ~",
    modalId: "modal6",
    slides: [{ url: process.env.PUBLIC_URL + "/ProjectImg/Company/login.png" }],
    brief: [
      "군복무 기간중에도 실력 향상을 위해 인프런을 통해 공부하며 진행하고 있는 프로젝트입니다.",
      "React, Node.js와 MongoDB를 활용한 풀스택 웹사이트입니다.",
      "프런트엔드 뿐 아니라 백엔드와 데이터베이스까지 다뤄보며 다방면의 이해도를 높였고 프론트엔드와 데이터베이스 간의 CRUD 기능을 이해하였습니다.",
    ],
  },
];
