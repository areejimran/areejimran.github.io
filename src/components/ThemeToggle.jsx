import React from 'react';

function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <label className="theme-toggle-switch" title="Toggle theme">
      <input 
        type="checkbox" 
        onChange={toggleTheme} 
        checked={isDarkMode} 
      />
      <span className="theme-toggle-slider"></span>
    </label>
  );
}

export default ThemeToggle;