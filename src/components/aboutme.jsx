import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function AboutMe() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="logo">B.A.</div>

    
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

  
        <nav className={`hero-nav ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
          <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
          <a href="#works" className="nav-link" onClick={toggleMenu}>Works</a>
          <a href="#contacts" className="nav-link" onClick={toggleMenu}>Contacts</a>
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
