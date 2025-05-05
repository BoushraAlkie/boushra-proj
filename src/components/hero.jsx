import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pics/akona.jpg";
import "../App.css";
import { FaBars, FaTimes } from "react-icons/fa"; 

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="logo">B.A.</div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={menuOpen ? "hero-nav open" : "hero-nav"}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link to="/experience" onClick={toggleMenu}>Experience</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </header>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="title">Hello, my name is Boushra Alkie</h1>
          <h2 className="role">Graphic Designer | System Analyst</h2>
          <p className="description">
            Work with me today as we turn your ideas into compelling visuals that captivate audiences and elevate your brand.
          </p>
          <div className="buttons">
            <button className="btn-vm">View More</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={logo} alt="Boushra Alkie" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
