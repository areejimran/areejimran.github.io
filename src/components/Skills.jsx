import React from 'react';

const skillsData = {
  "Programming Languages": [
    "C/C++" , "Python" , "Java" , "Amazon Mechanical Turk" , "SQL" , "MangoDB" , "Bash" , "HTML","JavaScript" , "BootStrap" , "ASP .Net" , "ML" , "VM Workstations" , "MSFVenom(ShellCodes)" ,"Social Engineer Toolkit"
  ],
   "Security Tools": [
    "Wireshark", "SIEM", "Nmap", "Metasploit", "JohntheRipper", "FTKImager","Nessus" 
  ],
  "Applications": [
    "Microsoft Azure", "Adobe Creative Cloud", "Microsoft Office Suite", "Excel", "After Effects", "Visual Studio", "IntelliJ", "Git", "Figma"
  ],
  "Terminals": [
    "macOS terminal", "Windows PowerShell", "Kali Linux"

  ],
  "Soft Skills": [
    "Leadership", "Cross-functional Collaboration", "Risk Management"
  ]
};

function Skills() {
  return (
    <section id="skills" className="content-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skill-category" key={category}>
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span className="skill-pill" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;