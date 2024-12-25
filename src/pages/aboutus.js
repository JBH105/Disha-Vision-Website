import React from 'react';
import about_1 from '../assets/about_1.png';
import about_2 from '../assets/about_2.png';
import about_3 from '../assets/about_3.png';
import '../styles/aboutus.css';

const Aboutus = () => {
  return (
    <div className="about_container">
      <section className="about_section">
        <div className="about_main">
          <h1>The visionaries behind every structure</h1>
          <p>A passionate team of dedicated professionals transforming ideas into inspiring spaces</p>
        </div>

      
          <div className="about-member">
            <div className="team-member-img">
              <img src={about_1} alt="t-img" />
            </div>
            <div className="team-member-info">
              <h2 className="team-member-quote">
                “At our firm, we believe architecture is more than designing buildings—it’s about shaping experiences and crafting spaces that inspire. Our team is driven by passion, precision, and a commitment to turning every vision into a lasting legacy”
              </h2>
              <h3 className="team-member-name">Akash Mohta</h3>
              <p className="team-member-role">Chief Architect, 24 yrs of experience</p>
            </div>
          </div>
    

        <div className="team_memberss">

          <div className="team_members">
            <img src={about_2} alt="Akash Mohta" style={{ backgroundColor: "#DDE5D8" }} />
            <h3>Akash Mohta</h3>
            <p>Chief Architect, 24 yrs of experience</p>
          </div>
          <div className="team_members">
            <img src={about_2} alt="Team Member" style={{ backgroundColor: "#FBDDEB" }} />
            <h3>Akash Mohta</h3>
            <p>Chief Architect, 24 yrs of experience</p>
          </div>
          <div className="team_members">
            <img src={about_2} alt="Team Member" style={{ backgroundColor: "#DDE5D8" }} />
            <h3>Akash Mohta</h3>
            <p>Chief Architect, 24 yrs of experience</p>
          </div>
        </div>

        <div className="about_image">
          <img src={about_3} alt="Company Vision" />
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
