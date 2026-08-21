import React, { useState, useEffect } from 'react';
import './App.css'; 

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.remove('light-mode');
    } else {
      htmlElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="site-wrapper"> 
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="main-content-container">
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
      </main>  
      <Footer />    
    </div>
  );
}

export default App;