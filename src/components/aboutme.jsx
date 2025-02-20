import React from "react";
import "../App.css";

function AboutMe() {
  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="logo">B.A.</div>
        <nav className="hero-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#works">Works</a>
          <a href="#contacts">Contacts</a>
        </nav>
      </header>

      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hello! I am an aspiring <span className="highlight">Graphic Designer</span>, an undergraduate student of
          <span className="highlight"> Information Technology</span> at WMSU. My interests include branding, digital illustration, and UI/UX design. 
          I enjoy exploring new design trends and experimenting with different styles to enhance my creative approach.
           My goal is to continuously improve my skills and contribute to projects that inspire, engage, and make a meaningful impact.
        </p>
        
      </div> 
    </div>
  );
}

export default AboutMe;
