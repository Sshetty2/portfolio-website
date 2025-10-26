import { BrowserRouter } from 'react-router-dom';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import { HeroImage } from '../HeroImage';

import './styles.scss';

const Hero = () => (
  <div id="home" className="hero-container">
    <div className="hero-text">
      <h1>Sachit Shetty</h1>
      <h3>Full-Stack Engineer & AI Systems Architect</h3>
      <p className="small-resume">7+ Years of Experience</p>
      <BrowserRouter>
        <a href="mailto:sachit.shetty@gmail.com" className="button">Contact</a>
      </BrowserRouter>
      <div className="social-media">
        <a
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
    </div>
    <HeroImage />

  </div>
);

export default Hero;
