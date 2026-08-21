import React from 'react';
 
const leadershipData = [
  {
    organization: "Minorities in Tech Loyola",
    role: "President",
    dates: "Sept 2024 - May 2025",
  }
];
 
function Leadership() {
  return (
    <section id="leadership" className="content-section">
      <h2>Leadership</h2>
      <div className="leadership-grid">
        {leadershipData.map((item, index) => (
          <div className="leadership-card" key={index}>
            <div className="leadership-header">
              <h3>{item.role}</h3>
              <span className="leadership-dates">{item.dates}</span>
            </div>
            <h4 className="leadership-org">{item.organization}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
 
export default Leadership;