import React from "react";
import logo from "../assets/pics/akona.jpg";
import "../App.css";


function Hero() {
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
          <img
            src={logo}
            alt="Boushra Alkie"
            className="profile-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
