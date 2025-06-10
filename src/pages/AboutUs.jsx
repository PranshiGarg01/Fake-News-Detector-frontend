import React from "react";
import "./AboutUs.css";

const teamMembers = [
  {
    name: "Pratyush Vishal",
    role: "Backend Developer",
    github: "https://github.com/PratyushVishal11011",
    linkedin: "https://www.linkedin.com/in/pratyush-vishal-b2811b325/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Pranshi Garg",
    role: "Frontend Developer",
    github: "https://github.com/PranshiGarg01",
    linkedin: "https://www.linkedin.com/in/pranshi-garg-75172932b/",
  },
  {
    name: "Rimjhim Shukla",
    role: "UI/UX Designer",
    github: "https://github.com/RimjhimShukla08",
    linkedin: "https://www.linkedin.com/in/rimjhim-shukla-02b373322/",
  },
];

const AboutUs = () => {
  return (
    <div className="aboutus_bg">
      <div className="aboutus">
        <div className="aboutus_heading">
          About Us
        </div>
        <hr className="about-line"></hr>
        <div className="aboutus_content">
          <div className="aboutus_content_container">
            <p><span className="content_ls">LieSpy</span> is a simple tool designed to help you verify whether a news article, claim, or headline is real or fake. In a world where misinformation spreads quickly, our goal is to make fact-checking accessible to everyone — no technical knowledge needed.</p>
            <p>Using machine learning and trusted data sources, we analyze news content and provide clear, reliable results so you can make informed decisions. Whether you're a student, a professional, or just curious, LieSpy is here to help you cut through the noise.</p>
            <p><span className="content_siam">SIAM</span> is a globally recognized organization dedicated to bridging the gap between mathematics and technology. Headquartered in Philadelphia, USA, with an active presence at VIT in India, SIAM provides a platform for students to explore diverse fields such as web and app development, machine learning, competitive coding, design, content creation, management, and research & development. Our community hosts a variety of engaging events and competitions, including the Math Premier League,  Hackulus, Codebreakers, and VIT's Got Talent. At SIAM, we foster innovation, collaboration, and learning, creating opportunities for students to grow and excel in the ever-evolving tech landscape.</p>
          </div>
        </div>
        <div className="team">
          <div className="team_heading">
            Our Team
          </div>
          <hr className="team-line"></hr>
          <div className="team-container">
            {teamMembers.map((member, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <div className="member-info">
                    <h2 className="name">{member.name}</h2>
                    <p className="role">{member.role}</p>
                  </div>
                  <div className="social-icons">
                    <a href={member.github} target="_blank" rel="noreferrer">
                      <img src="/images/github_black.png" alt="GitHub" className="icon github" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <img src="/images/linkedin_black.png" alt="LinkedIn" className="icon linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;




