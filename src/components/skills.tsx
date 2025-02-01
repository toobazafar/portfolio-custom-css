import React from 'react'
import "../app/styles/skills.css";

const skills = () => {
  return (
    <div id='skills' className="skills-container">
        <div className="skills-grid">
            {/* first column: heading and paragraph */}
            <div data-aos="zoom-in-up" className="skills-left">
                <h2 className="skils-heading">Technologies I work with</h2>
                <p className="skills-text">
                    I have a solid foundation in web development , specializing in HTML, CSS, and Javascript. My experience extends to using framework like Reacr and Next.js to create dynamic and user-friendly application. I'm also proficient in Tailwind CSS for efficient styling and design. with a passion for learning, I stay updatedon the latest technologies to enhance my skillset and contribute effectively to projects.
                </p>
            </div>
             
             {/* second column: skills */}
                <div className="skills-right">
             <div className="skills-icons-grid">
                <div className="skills-space">
                <h2  data-aos="zoom-in-up">Typescript</h2>
                <h2 data-aos="zoom-in-up">React.js</h2>
                <h2 data-aos="zoom-in-up">Next.js</h2>
             </div>
             <div className="skills-space">
                <h2 data-aos="zoom-in-up">Tailwind</h2>
                <h2  data-aos="zoom-in-up">CSS</h2>
                <h2 data-aos="zoom-in-up">Node.js</h2>
             </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default skills;
