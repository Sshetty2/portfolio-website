/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import pythonIcon from '../../assets/python-icon.svg';
import csharpIcon from '../../assets/csharp-icon.svg';
import javaIcon from '../../assets/java-icon.svg';
import awsIcon from '../../assets/aws-icon.svg';
import dockerIcon from '../../assets/docker-icon.svg';
import postgresqlIcon from '../../assets/postgresql-icon.svg';

import './styles.scss';

const AboutSection = () => (
  <div className="about-container">
    <div className="about-text">
      <h2>About me</h2>
      <div>
        <p>
            Hi there! 👋 I'm Sachit, a full-stack software engineer specializing in building intelligent, agentic AI systems that leverage the power of generative AI to solve complex real-world problems.
        </p>
        <p>
          With 7+ years of experience across diverse domains—including Cyber Security and Financial Services—I've developed expertise in multiple technology stacks: C# and .NET, Java-based enterprise systems, Python for scripting and API development, and Node.js for scalable backend services.
        </p>
        <p>
          My current focus is on designing and implementing sophisticated AI agent workflows that combine LLMs, vector databases, graph-based execution (LangGraph), and multi-stage reasoning pipelines. From CPE matching agents for vulnerability management to natural language query systems, I build tools that transform how teams interact with complex data and processes.
        </p>
        <p>
          I bring together traditional software engineering excellence with cutting-edge AI capabilities—creating solutions that are not just intelligent, but reliable, scalable, and production-ready. Let's connect and explore how agentic AI can transform your next project!</p>
      </div>
      <div className="hard-skills">
        <div className="icon">
          <img src={pythonIcon} alt="Python" />
        </div>
        <div className="icon">
          <img src={csharpIcon} alt="C#" />
        </div>
        <div className="icon">
          <img src={javaIcon} alt="Java" />
        </div>
        <div className="icon">
          <img src={typescriptIcon} alt="TypeScript" />
        </div>
        <div className="icon">
          <img src={reactIcon} alt="React" />
        </div>
        <div className="icon">
          <img src={nodeIcon} alt="Node.js" />
        </div>
        <div className="icon">
          <img src={awsIcon} alt="AWS" />
        </div>
        <div className="icon">
          <img src={dockerIcon} alt="Docker" />
        </div>
        <div className="icon">
          <img src={postgresqlIcon} alt="PostgreSQL" />
        </div>
      </div>
    </div>
    <div className="about-image">
    </div>
  </div>
);

export default AboutSection;
