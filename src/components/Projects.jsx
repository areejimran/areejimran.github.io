import React from 'react';

const projectData = [
  {
    title: "Digital Forensics Report of a Compromised Workstation",
    description: "A simulated digital forensics investigation into a corporate data breach, centered on a phishing attack that compromised an executive's laptop. Through the use of a disk image of the affected machine, I traced how the attacker gained access, maintained persistence, and moved through the system while evading detection. The registry, event log, and email artifacts were examined to verify evidence integrity and reconstruct a timeline of the incident. The investigation concluded with a formal forensic report detailing the findings and recommended security remediations.",
    tech: "SQLite Database, Autopsy, LECmd, pestudio, RegRipper, Registry Explorer, Event Viewer, Outlook",
    link: "https://drive.google.com/file/d/17q84wAXiEWYQOt6OF7ZescSDbOwggcfe/view?usp=sharing"
  },
  {
    title: "Site Survey",
    description: "Designed a high-density Wi-Fi 6E network for a three-floor, 30,000+ sq ft office supporting 250 users (550 devices) within three years. This design deploys 43 enterprise access points across a tri-band architecture with zone-specific channel planning to eliminate interference and maximize capacity in high-traffic areas. This project includes deliverables of per-floor AP layouts, channel allocation tables, capacity calculations, and a full hardware specification package engineered to work within challenges",
    tech: "Wireless Network Design, RF/Channel planning, Enterprise Access Points.",
    link: "https://drive.google.com/file/d/163Pa7N6VgxAOBni3m7u6M-tmX5cq90m7/view?usp=sharing"
  },
  {
    title: "Network Analysis Report",
    description: "Analyzed network traffic captures to identify and characterize various attack patterns, including port scanning, malformed packet exploits, and malicious payload delivery, using industry-standard intrusion detection tools. Developed and tested custom detection signatures to flag specific network events based on defined security requirements.",
    tech: "Snort, Wireshark, TFTP/RADIUS signatures",
    link: "https://drive.google.com/file/d/17Ef03O8QdxazHx5OYweJMCWoPHqUP5_H/view?usp=sharing"
  },
  {
    title: "Wireless Point to Point (PtP) Bridge Design",
    description: "Created a comprehensive 12.8-mile wireless point-to-point (PtP) bridge solution connecting MyCo’s main facility to a remote site. Developed a detailed site analysis illustrating Line of Sight, First Fresnel Zone clearance, and earth curvature, while calculating required antenna heights for both locations. Selected and documented recommended wireless hardware, cabling, lightning protection, and building entry components with corresponding manufacturers and part numbers.",
    tech: "Wireless Networking, Point-to-Point (PtP), RF Planning, Line of Sight (LoS), Fresnel Zone Analysis, Link Budget, Path Loss, Network Design",
    link: "https://drive.google.com/file/d/1QEgqJfAAUKY4-Ai6ZqwMHySWIDUXr4KP/view?usp=sharing"
  },
  {
    title: "Network Intrusion Detection & Response Analysis",
    description: "Performed an end-to-end incident response investigation using a labeled network intrusion dataset containing a mix of benign and malicious traffic, including common attack types such as brute force, denial-of-service, web application attacks, and botnet activity. This project applies an industry-style incident response playbook to guide the investigation, structuring the workflow around monitoring, triage, threat intelligence, and remediation.",
    tech: "Wireshark, Zeek, Splunk, Snort, VirusTotal",
    link: "https://drive.google.com/file/d/1tagGn7u8_y-cNCBH6OMa_g-_-ju7piwW/view?usp=sharing"
  },
  
];

function Projects() {
  return (
    <section id="projects" className="content-section"> 
      <h2>Projects</h2>
      <div className="project-list">
      {projectData.map((project, index) => {
          if (project.link) {
            return (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card" 
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.tech}</p>
              </a>
            );
          }
          
          return (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.tech}</p>
            </div>
          );

        })}
      </div>
    </section>
  );
}

export default Projects;
