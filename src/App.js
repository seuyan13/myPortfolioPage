import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/HeroSection/Hero";
import About from "./components/AboutSection/About";
import Skill from "./components/SkillSection/Skill";
import Education from "./components/EducationSection/Education";
import WorkContainer from "./components/WorkSection/WorkContainer";
import ProjectContainer from "./components/ProjectSection/ProjectContainer";
import Contact from "./components/ContactSection/Contact";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Education />
        <WorkContainer />
        <ProjectContainer />
        <Contact />
      </div>
    </HashRouter>
  );
}
