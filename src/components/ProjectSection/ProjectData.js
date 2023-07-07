import { Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const GithubIcon = () => (
  <Github style={{ color: "black", fontSize: "1.5rem" }} />
);

export const projectsData = [
  {
    id: "modal1",
    category: "java",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/BarcodeScannerApp/logo.png",
    title: "BarcodeScanner",
    group: "Team Project",
    date: "date",
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
    info: [
      " Java",
      " Android Studio",
      " 4 people",
      <Link
        to="https://github.com/PhoneBarcodeScanner/BarcodeScanner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </Link>,
    ],

    brief: [
      "It was a project by a TimberSmart and It was a programming project class.",
      "it was first big project for both me and my team members and not familiar for online meeting during the Covid period.",
      "However, we became more and more familiar with online meetings, checked each other's modifications and current progress every week, and successfully completed the project with an A+ at the end.",
      "Through this project, I learned not only better mobile development skills, but also teamwork using Github, how to conduct meetings, and how to modify and supplement projects based on this.",
    ],
  },
  {
    id: "modal2",
    category: "java",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/GalleryApp/main.jpg",
    title: "Gallery App",
    group: "Personal Project",
    date: "date",
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
    info: [
      " Java",
      " Android Studio",
      " personal",
      <Link
        to="https://github.com/seuyan13/Gallery-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </Link>,
    ],
    brief: [
      " This project was started to improve my Android development skills while taking a mobile development class.",
      "It made me to understand Android development technologies using Java one step further.",
      "last assignment was developing any mobile app.  I submitted this project as the assignment, and got the good marks",
    ],
  },
  {
    id: "modal3",
    category: "react",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/Portfolio/Portfolio.png",
    title: "Portfolio",
    group: "Personal Project",
    date: "date",
    modalId: "modal3",
    slides: [
      { url: process.env.PUBLIC_URL + "/ProjectImg/Portfolio/Portfolio.png" },
    ],
    info: [
      " React",
      " Visual Studio Code",
      " personal",
      <Link
        to="https://github.com/PhoneBarcodeScanner/BarcodeScanner"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </Link>,
    ],
    brief: [
      "Using React, I created a developer portfolio in the form of a web page.",
      "As I worked, I learned how to efficiently manage and process multiple data and components.",
    ],
  },
  {
    id: "modal4",
    category: "react",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/TodoList/main.png",
    title: "Todo List",
    group: "Personal Project",
    date: "date",
    modalId: "modal4",
    slides: [
      { url: process.env.PUBLIC_URL + "/ProjectImg/TodoList/main.png" },
      { url: process.env.PUBLIC_URL + "/ProjectImg/TodoList/paging.png" },
      {
        url: process.env.PUBLIC_URL + "/ProjectImg/TodoList/selectFunction.png",
      },
    ],
    info: [
      " React",
      " Visual Studio Code",
      " personal",
      <Link
        to="https://github.com/seuyan13/todo-list"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </Link>,
    ],
    brief: [
      "This is the first React project that I started by learning React on my own.",
      "I added some functions like pagenation, select all, delete  to the basic todo list app that I created through YouTube.",
      "Through this project, I was able to learn various concepts about React.",
    ],
  },
  {
    id: "modal5",
    category: "react",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/NewsApp/main.png",
    title: "News App",
    group: "Personal Project",
    date: "date",
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
    info: [
      " React",
      " Visual Studio Code",
      " personal",
      <Link
        to="https://github.com/seuyan13/newsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </Link>,
    ],
    brief: [
      "It's my second personal React project.",
      "While reading the news on the app, I came up with an idea and started it.",
      "Through this project, I learned skills such as reading and processing APIs using React.",
      "It was harder to implement the search box than I thought, but in the process, I learned the concept of implementing the search bar and was able to make it well. ",
    ],
  },
  {
    id: "modal6",
    category: "java",
    imgSrc: process.env.PUBLIC_URL + "/ProjectImg/NotePad/main.png",
    title: "NotePad",
    group: "Team Project",
    date: "date",
    modalId: "modal6",
    slides: [
      { url: process.env.PUBLIC_URL + "/ProjectImg/NotePad/fileMenu.png" },
      { url: process.env.PUBLIC_URL + "/ProjectImg/NotePad/editMenu.png" },
      { url: process.env.PUBLIC_URL + "/ProjectImg/NotePad/saveAsPdf.png" },
      { url: process.env.PUBLIC_URL + "/ProjectImg/NotePad/print.png" },
    ],
    info: [
      " Java",
      " Eclipse",
      " 2",
      <Link
        to="https://github.com/seuyan13/Notepad"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </Link>,
    ],
    brief: [
      "It was the assignment of Software Design and Construction class.",
      "I was not familiar with the use of Java, and there were many unfamiliar concepts, so it felt more difficult.",
      "It was my first team task. I was in charge of implementing the functions of printing, saving as pdf, select all, copy and paste",
      "I learned how to use libraries and tools such as PMD and XML as well as development skills using Java.",
    ],
  },
];
