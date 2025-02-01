import React from 'react'
import Navbar from './Navbar'
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div
     id="hero"
     className="hero-container">

    
     
       <Navbar />
       <div className="hero-content">
       <div className="hidden lg:block"></div>
       

       <div className="hero-text">
        <div className="hero-main">
          <img src="/images.jpg" alt="profile"></img>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Tooba Zafar</p>
            
          </div>
        </div>
        </div>
        </div> 
  );
};

export default Hero;
