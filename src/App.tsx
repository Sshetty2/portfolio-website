import { useState } from 'react';
import { Header } from './components/Header';
import Particles from 'react-tsparticles';
import { getParticlesProps } from './particlesProps';
import { HeroSection } from './components/Hero';
import { AboutSection } from './components/About';
import { Projects } from './components/Projects';
import { ContactSection } from './components/Contact';

import 'react-toastify/dist/ReactToastify.css';
import './global.scss';

function App () {
  const [theme, setTheme] = useState('dark');

  function toggleTheme () {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <div className="main-container" style={{ display: 'grid' }}>
        <Particles
          {...getParticlesProps(theme)}
        />
        <HeroSection />
        <AboutSection />
        <Projects />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
