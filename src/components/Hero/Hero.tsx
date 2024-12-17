import { BrowserRouter } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavHashLink } from 'react-router-hash-link';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';

import './styles.scss';
import { HeroImage } from '../HeroImage';

const Hero = () => (
  <div id="home" className="hero-container">
    <div className="hero-text">
      <ScrollAnimation animateIn="fadeInUp" >
        <h1>Sachit Shetty</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" >
        <h3>Frontend Software Engineer</h3>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <p className="small-resume">6 Years of Experience</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" >
        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
        </BrowserRouter>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <div className="social-media"><a
          href="https://www.linkedin.com/in/sshetty2/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Sshetty2/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        </div>
      </ScrollAnimation>
    </div>
    <HeroImage />

  </div>
);

export default Hero;
