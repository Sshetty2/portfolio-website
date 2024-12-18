import githubIcon from '../../assets/github.svg';
import externalLink from '../../assets/external-link.svg';
import ScrollAnimation from 'react-animate-on-scroll';

import './styles.scss';

const projects = [
  {
    title      : 'Wiki Sentiment Analysis',
    // eslint-disable-next-line max-len
    description: 'A React application that visualizes emotional sentiments from Wikipedia articles using IBM Watson\'s Natural Language Understanding model. The application processes Wikipedia content through AWS Lambda functions to analyze emotional sentiment patterns and presents the data through interactive visualizations.',
    tech       : ['React', 'Typescript', 'MUI', 'IBM Watson', 'AWS Lambda', 'API Gateway', 'Wikipedia API'],
    githubLink : 'https://github.com/Sshetty2/wiki-sentiment-analysis',
    projectLink: 'https://www.wiki-sentiment-analyzer.wiki/'
  },
  {
    title      : 'Demo Blotter App',
    // eslint-disable-next-line max-len
    description: 'This React-based blotter app features an order entry form with validation for market and limit orders, real-time order tracking using AG Grid, and intuitive Buy/Sell color coding. Built with Redux for state management and Ant Design for a polished UI, the app supports responsive design, diverse order types, and advanced form controls, ensuring smooth user interaction and performance.',
    tech       : ['React', 'Typescript', 'Redux', 'Ant Design', 'AG Grid', 'SCSS'],
    githubLink : 'https://github.com/Sshetty2/demo-blotter-app',
    projectLink: 'https://main.d1m98d5rusf0mr.amplifyapp.com/'
  }
];

type ProjectProps = {
  projectLink: string;
  githubLink: string;
  title: string;
  description: string;
  tech: string[];
}

const Project = ({ projectLink, githubLink, title, description, tech }: ProjectProps) => (
  <ScrollAnimation animateIn="flipInX">
    <div className="project">
      <header>
        {/*  eslint-disable-next-line max-len */}
        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#57ffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Visit site" /></a>
          <a href={projectLink} target="_blank" rel="noreferrer">
            <img src={externalLink} alt="Visit site" />
          </a> </div>
      </header>
      <div className="body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <footer> <ul className="tech-list"> {tech.map(_tech => <li key={_tech}>{_tech}</li>)} </ul> </footer>
    </div>
  </ScrollAnimation>
);

const Projects = () => (
  <div id="projects" className="projects-container">
    <h2>Demo Projects</h2>
    <div className="projects">
      {projects.map(project => <Project key={project.title} {...project} />)}
    </div>
  </div>
);

export default Projects;
