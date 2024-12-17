import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../../assets/sshetty_resume.pdf';
import './styles.scss';

const HeaderSection = ({ toggleTheme }: { toggleTheme: () => void }) =>{
  const [isActive, setActive] = useState(false);

  function closeMenu () {
    setActive(false);
  }

  return (
    <div className="header-section">
      <Router>
        <input
          onChange={toggleTheme}
          className="container-toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#projects" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={Resume} download className="resume-btn">Resume</a>
        </nav>
        <div
          aria-expanded={isActive}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => setActive(!isActive)}
        />
      </Router>
    </div>
  );
};

export default HeaderSection;
