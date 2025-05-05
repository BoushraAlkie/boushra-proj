import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPhp, FaDatabase, FaUserGraduate, FaMedal, FaCertificate } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

function AboutMe() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const skills = [
    { name: "HTML5", level: 90, icon: <FaHtml5 className="skill-icon html" />, color: "#E44D26" },
    { name: "CSS3", level: 85, icon: <FaCss3Alt className="skill-icon css" />, color: "#264DE4" },
    { name: "JavaScript", level: 75, icon: <FaJs className="skill-icon js" />, color: "#F7DF1E" },
    { name: "Bootstrap", level: 85, icon: <FaBootstrap className="skill-icon bootstrap" />, color: "#7952B3" },
    { name: "PHP", level: 75, icon: <FaPhp className="skill-icon php" />, color: "#777BB4" },
    { name: "MySQL", level: 80, icon: <FaDatabase className="skill-icon mysql" />, color: "#4479A1" }
  ];

  const certifications = [
    { 
      name: "Civil Service Professional", 
      year: "2024", 
      icon: <FaUserGraduate />,
      description: "Government certification for professional civil service eligibility",
      color: "#5e3023"
    },
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

      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
        </div>
        
        <div className="about-tabs-container">
          <div className="about-tabs">
            <button 
              className={`about-tab ${activeTab === "about" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              <span className="about-tab-icon">👤</span>
              <span className="about-tab-text">Bio</span>
            </button>
            <button 
              className={`about-tab ${activeTab === "skills" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              <span className="about-tab-icon">💻</span>
              <span className="about-tab-text">Skills</span>
            </button>
            <button 
              className={`about-tab ${activeTab === "certifications" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("certifications")}
            >
              <span className="about-tab-icon">🏆</span>
              <span className="about-tab-text">Certifications</span>
            </button>
          </div>
        </div>
        
        <div className="about-content-wrapper">
          {activeTab === "about" && (
            <div className="about-bio animate-tab">
              <div className="bio-card">
                <div className="bio-header">
                  <div className="bio-avatar">
                    <span className="bio-emoji">👋</span>
                  </div>
                  <h2 className="bio-greeting">Hello there!</h2>
                </div>
                <p className="about-text">
                  I am an aspiring <span className="highlight">Graphic Designer</span>, an undergraduate student of
                  <span className="highlight"> Information Technology</span> at WMSU. My interests include branding, digital illustration, and UI/UX design. 
                  I enjoy exploring new design trends and experimenting with different styles to enhance my creative approach.
                </p>
                <p className="about-text">
                  With a background in system analysis and a passion for visual communication, I bring a unique perspective to projects that require both technical understanding and creative solutions. I believe in the power of design to transform user experiences and solve complex problems.
                </p>
                <div className="bio-goals">
                  <h3 className="bio-section-title">My Goals</h3>
                  <ul className="bio-goals-list">
                    <li className="bio-goal-item">
                      <span className="bio-goal-icon">🎯</span>
                      <span>Continuously improve my design and technical skills</span>
                    </li>
                    <li className="bio-goal-item">
                      <span className="bio-goal-icon">💼</span>
                      <span>Contribute to projects that inspire and engage users</span>
                    </li>
                    <li className="bio-goal-item">
                      <span className="bio-goal-icon">🌟</span>
                      <span>Make a meaningful impact through creative solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "skills" && (
            <div className="skills-section animate-tab">
              <h2 className="skills-heading">Technical Proficiencies</h2>
              <div className="skills-container">
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-card-inner" style={{borderTop: `4px solid ${skill.color}`}}>
                        <div className="skill-icon-wrapper" style={{color: skill.color}}>
                          {skill.icon}
                        </div>
                        <h3 className="skill-title">{skill.name}</h3>
                        <div className="skill-level-container">
                          <div 
                            className="skill-level" 
                            style={{
                              width: `${skill.level}%`, 
                              backgroundColor: skill.color
                            }}
                          >
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skills-summary">
                <p>My diverse skill set allows me to approach projects from both technical and creative perspectives, ensuring comprehensive solutions that are both functional and visually appealing.</p>
              </div>
            </div>
          )}
          
          {activeTab === "certifications" && (
            <div className="certifications-section animate-tab">
              <h2 className="certifications-heading">Professional Certifications</h2>
              <div className="certifications-container">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-card" style={{borderLeft: `4px solid ${cert.color}`}}>
                    <div className="certification-icon" style={{color: cert.color}}>
                      {cert.icon}
                    </div>
                    <div className="certification-details">
                      <h3 className="certification-name">{cert.name}</h3>
                      <div className="certification-year-badge" style={{backgroundColor: cert.color}}>
                        {cert.year}
                      </div>
                      <p className="certification-description">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="certifications-note">
                <p>Continuous learning and professional development are essential parts of my journey. I'm always seeking new opportunities to expand my knowledge and skills.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
