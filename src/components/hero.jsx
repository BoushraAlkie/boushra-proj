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
          <a href="#home" onClick={toggleMenu}>Home</a>
          <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#works" onClick={toggleMenu}>Works</a>
          <a href="#contacts" onClick={toggleMenu}>Contacts</a>
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
