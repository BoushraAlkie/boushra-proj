import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

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

      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>boushra.alkie@gmail.com</p>
            </div>
            
            <div className="contact-social">
              <a href="https://www.facebook.com/boushraalkie" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook className="social-icon facebook" />
              </a>
              <a href="https://github.com/BoushraAlkie" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon github" />
              </a>
              <a href="https://www.linkedin.com/in/boushra-alkie-4581b035a/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon linkedin" />
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
