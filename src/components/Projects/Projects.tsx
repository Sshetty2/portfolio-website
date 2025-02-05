import ScrollAnimation from 'react-animate-on-scroll';
import githubIcon from '../../assets/github.svg';
import externalLink from '../../assets/external-link.svg';

import './styles.scss';

const projects = [
  {
    title      : 'World Impact Analyzer',
    // eslint-disable-next-line max-len
    description: 'A Next.js application that analyzes the historical and societal impact of notable figures using OpenAI\'s GPT-4o model and Wikipedia data. The tool integrates LangChain for contextual data retrieval, AWS Lambda for serverless execution, and Neon Postgres for efficient data storage and caching. Users can input a name, and the system generates an AI-powered analysis based on structured Wikipedia content and sentiment trends.',
    tech       : ['Next.js', 'Tailwind', 'OpenAI API', 'LangChain', 'AWS Lambda', 'Neon Postgres', 'Wikipedia API'],
    githubLink : 'https://github.com/Sshetty2/world-impact-analyzer',
    projectLink: 'https://world-impact-analyzer.vercel.app/'
  },
  {
    title      : 'SQL Query Assistant',
    // eslint-disable-next-line max-len
    description: 'A natural language to SQL query interface that leverages LangChain and OpenAI to convert plain English into executable SQL queries. Features an interactive Streamlit frontend for intuitive database exploration, real-time query execution, and result visualization. The system includes smart error handling, query templating, and supports custom parameters like sort orders and time-based filtering. Built with a FastAPI backend for scalability and Docker support for easy deployment.',
    tech       : ['Python', 'LangChain', 'OpenAI API', 'Streamlit', 'FastAPI', 'Docker', 'SQL Server', 'SQLite'],
    githubLink : 'https://github.com/Sshetty2/sql-query-assistant',
    projectLink: 'https://sql-query-assistant-ql4c.onrender.com/'
  },
  {
    title      : 'Demo Blotter App',
    // eslint-disable-next-line max-len
    description: 'This React-based blotter app features an order entry form with validation for market and limit orders, real-time order tracking using AG Grid, and intuitive Buy/Sell color coding. Built with Redux for state management and Ant Design for a polished UI, the app supports responsive design, diverse order types, and advanced form controls, ensuring smooth user interaction and performance.',
    tech       : ['React', 'Typescript', 'Redux', 'Ant Design', 'AG Grid', 'SCSS'],
    githubLink : 'https://github.com/Sshetty2/demo-blotter-app',
    projectLink: 'https://main.d1m98d5rusf0mr.amplifyapp.com/'
  },
  {
    title      : 'Meetup Batch Event Set Tool',
    // eslint-disable-next-line max-len
    description: 'A Chrome extension that enhances Meetup.com functionality by enabling users to schedule multiple events to Google Calendar in bulk. Features include group autocomplete search, date range selection, and automated event scheduling. Built with React and Redux for state management, the extension integrates with both Meetup and Google Calendar APIs through OAuth2 authentication, providing a seamless experience for batch event management.',
    tech       : ['React', 'TypeScript', 'Redux', 'Material-UI', 'Chrome Extension API', 'OAuth2', 'GraphQL'],
    githubLink : 'https://github.com/Sshetty2/meetup-batch-event-set',
    projectLink: 'https://chromewebstore.google.com/detail/meetup-batch-event-set-to/cabfodbfjmgloaallchcnnkgcfpnobem'
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
