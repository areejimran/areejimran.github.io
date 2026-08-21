import React from 'react';

const experienceData = [
  {
    role: "Technical Consultant",
    company: "Aspire2Steam",
    date: "June 2026 - Present",
    points: [
      "Researched and designed guidelines and tools to strengthen existing programs.",
      "Led the development of the Peer2Peer project initiative by producing key deliverables, logistics, and implementation strategies.",
      "Facilitated project meetings, stakeholder reviews, and feedback cycles to achieve program objectives and timelines",
    ]
  },
  {
    role: "Research Assistant - Wireless Security",
    company: "Loyola University Chicago - Cybersecurity Department",
    date: "Jan 2026 - Present",
    points: [
      "Conducted research using a WiFi Pineapple to analyze security and privacy risks affecting mobile devices in public spaces.",
      "Evaluated network configurations and mitigation strategies to identify and address security gaps.",
      "Analyzed MAC address data to identify recurring device identifiers and patterns across multiple days of network activity."
    ]
  },
  {
    role: "Research Assistant - LLM Fine-Tuning for Cyberbullying Detection",
    company: "BullyBlocker",
    date: "Sept 2025 - Jan 2026",
    points: [
      "Built machine learning models to detect and prevent cyberbullying to create safer online spaces by identifying harmful behaviors and content on social media platforms.",
      "Fine-tuned CLIP (& other ML models) on a binary-labeled dataset to improve classification accuracy.",
      "Integrated image and text analysis for a more comprehensive detection framework."
    ]
  },
  {
    role: "Product Intern",
    company: "Laith Inc",
    date: "May 2025 - Jan 2026",
    points: [
      "Developed and maintained front-end components using HTML, CSS, and JavaScript, reducing site bugs by 30% through clean, efficient code for beta testing usage.",
      "Conducted continuous performance testing and optimization to improve site load times and scalability.",
      "Integrated brand elements such as logo, color schemes, and messaging to ensure consistency across all digital touchpoints."
    ]
  },
];

function Experience() {
  return (
    <section id="experience" className="content-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map((job, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{job.role}</h3>
              <span className="experience-date">{job.date}</span>
            </div>
            <h4 className="experience-company">{job.company}</h4>
            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
