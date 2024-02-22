import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import ContactMe from "./components/ContactMe";

import "./styles/style.css";

function App() {
  // let mobile = window.innerWidth <= 480;
  // let tablet = window.innerWidth > 480 && window.innerWidth <= 1024;
  let desktop = window.innerWidth > 1024;

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    if (desktop) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className="App">
      <div className="background">
        <div 
          className="circle" 
          style={{ transform: `translateX(${offsetY * 0.5}px) translateY(${offsetY * 0.15}px) rotate(-${offsetY * 0.036}deg)` }}
        ></div>
      </div>
      <Nav />
      <section className="homepage" id="home">
        <div className="photo">
          <img src="../assets/images/photo.jpg" alt="" />
        </div>
        <div className="text">
          <p>Hi, 我是念婷</p>
          <p>一名網頁前端工程師</p>
        </div>
      </section>
      <section className="about-me" id="about-me">
        <div className="skills">
          <p>技能</p>
          <Skills />
        </div>
        <div className="workExperience">
          <p>工作經歷</p>
          <WorkExperience />
        </div>
      </section>
      <section className="contact-me" id="contact-me">
        <p>聯絡方式</p>
        <ContactMe desktop={desktop} />
      </section>
    </div>
  );
}

export default App;
