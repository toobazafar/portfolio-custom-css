import React from 'react'
import '../app/styles/about.css';

const about = () => {
  return (
    <div id='about' className="about-container">
        <h2 className='about-heading' data-aos="zoom-in-up">
          About me
          </h2>
        <p className='about-text' data-aos="zoom-in-up">
            I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse. passionate about technology and constantly learning new skills to stay up-to-data with the latest innovation.
        </p>
    </div>
  );
};

export default about;
