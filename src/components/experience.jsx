import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Experience() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const experiences = [
    {
      id: 1,
      company: "Zenith Solutions",
      role: "System Analyst",
      duration: " 2023 - Present",
      description: "Designed and implemented the Document Management and Tracking System to streamline workflow processes. Conducted system analysis, requirements gathering, and collaborated with stakeholders to ensure the system meets operational needs. Provided technical support and training to personnel using the system."
    }
  ];

  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="logo">B.A.</div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`hero-nav ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link to="/experience" onClick={toggleMenu}>Experience</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </header>

      <div className="experience-container">
        <h1 className="experience-title">Professional Experience</h1>
        
        <div className="experience-timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
