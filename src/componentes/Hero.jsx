import React from 'react';

import './Styles/Hero.css';

const Hero = ({ title }) => {
    
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>
            ¡La mente muy clara y la cerveza muy fría! Ven a conocer las
            mejores cervezas de Chile.
          </p>          
        </article>
      </div>
    </section>
  );
};

export default Hero;