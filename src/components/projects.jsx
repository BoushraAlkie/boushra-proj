import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      id: 1,
      title: "Pokedex Application",
      description: "A comprehensive Pokedex application built with React and Vite that fetches data from the PokeAPI. Features include searching for Pokemon, viewing detailed stats, and a responsive design for all devices.",
      github: "https://github.com/BoushraAlkie/pokemon",
      demo: "https://pokemon-allana-boushra.netlify.app",
      image: "/react (1).jpeg"
    },
    {
      id: 2,
      title: "To-Do List Manager",
      description: "A feature-rich To-Do List application developed with React and Vite. Includes task creation, editing, deletion, priority setting, and filtering options. Uses local storage to persist tasks between sessions.",
      github: "https://github.com/BoushraAlkie/todolist",
      demo: "https://todolist-allana-boushra.netlify.app",
      image: "/react (2).jpeg"
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

      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        
        <div className="projects-grid centered-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
