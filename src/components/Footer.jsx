import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <h2>Get in Touch</h2>
        <p>
          Feel free to reach out for any inquiries, collaborations or oppurtunities! 
        </p>
        <a href="mailto:areejimran86@gmail.com" className="cta-button-solid">
          Say Hello
        </a>
        
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/areej-imran-791b4a22a/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/areejimran" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Areej Imran
        </div>
      </div>
    </footer>
  );
}

export default Footer;