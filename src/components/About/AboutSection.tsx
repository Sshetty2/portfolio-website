/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import ScrollAnimation from 'react-animate-on-scroll';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';

import './styles.scss';

const AboutSection = () => (
  <div className="about-container">
    <div className="about-text">
      <ScrollAnimation animateIn="fadeInLeft">
        <h2>About me</h2>
      </ScrollAnimation>
      <ScrollAnimation className="animation-delay" animateIn="fadeInLeft" >
        <p>
            Hi there! 👋 Welcome to my digital portfolio. I'm Sachit, a seasoned software engineer with a passion for crafting innovative enterprise solutions, exploring the transformative power of AI, and leveraging the full potential of cloud computing with AWS.
        </p>
        <p>
          My expertise spans cutting-edge development, scalable architecture design, and integrating AI-driven solutions into real-world applications.</p>
        <p>
          With a strong foundation in enterprise software development, I’ve built robust, scalable, and user-focused applications that deliver tangible business value. My understanding of artificial intelligence concepts empowers me to design intelligent systems that solve complex problems, enhance user experiences, and drive efficiency.</p>
        <p>
          Feel free to explore my projects, connect with me on LinkedIn, or drop me a message to discuss how I can help you bring your next big idea to life!</p>
      </ScrollAnimation>
      <div className="hard-skills">
        <div className="icon">
          <ScrollAnimation className="animation-delay-icon" animateIn="fadeInUp">
            <img src={reactIcon} alt="React" />
          </ScrollAnimation>
        </div>
        <div className="icon">
          <ScrollAnimation className="animation-delay-icon" animateIn="fadeInUp">
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
        </div>

        <div className="icon">
          <ScrollAnimation className="animation-delay-icon" animateIn="fadeInUp">
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
        </div>
      </div>
    </div>
    <div className="about-image">
      <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
      </ScrollAnimation>
    </div>
  </div>
);

export default AboutSection;
