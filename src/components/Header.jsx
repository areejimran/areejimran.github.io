import React from 'react';
import profileImage from '../assets/areej-headshot.jpg'; 
import ThemeToggle from './ThemeToggle';

function Header({ isDarkMode, toggleTheme }) {
  return (
    <div className="hero-container">
      
      <div className="orb-container">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="hero-top-right">
        <a 
          href="Areej_Imran_Resume.docx.pdf"
          download 
          className="cta-button"
        >
          Download Resume
        </a>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>

      <div className="hero-content">
        <img 
          src={profileImage} 
          alt="Areej Imran" 
          className="hero-profile-image" 
        />
        
        <h1>Areej Imran</h1>

        <div className="rotating-text-container">
          <span className="rotating-text-item item-1">Building Secure Digital Experiences</span>
          <span className="rotating-text-item item-2">Engineering End-to-End Solutions</span>
          <span className="rotating-text-item item-3">Turning Data into Cyber Insights</span>
          <span className="rotating-text-item item-4">Passionate about Threat Detection and Analysis</span>
          <span className="rotating-text-item item-5">Building Secure Digital Experiences</span> 
        </div>

        <nav>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#leadership">Leadership</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
         
        </nav>
        
      </div>

    </div>
  );
}

export default Header;
