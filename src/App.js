import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const TRACKING_ID = "G-Z3PWPWN04R";

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-terminal-dark text-green-400 p-4 md:p-8">
        <header className="terminal-container mb-8">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <div className="ml-4 font-mono">alphy@Alphy's Laptop:~$</div>
          </div>
          <nav className="terminal-nav">
            <NavLink to="/" className={({isActive}) => isActive ? "terminal-nav-item active" : "terminal-nav-item"}>
              Home
            </NavLink>
            <NavLink to="/skills" className={({isActive}) => isActive ? "terminal-nav-item active" : "terminal-nav-item"}>
              Skills
            </NavLink>
            <NavLink to="/resume" className={({isActive}) => isActive ? "terminal-nav-item active" : "terminal-nav-item"}>
              Resume
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "terminal-nav-item active" : "terminal-nav-item"}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "terminal-nav-item active" : "terminal-nav-item"}>
              Contact
            </NavLink>
          </nav>
        </header>
        
        <main className="terminal-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="terminal-footer">
          <p>&copy; {new Date().getFullYear()} | Built with React & TailwindCSS | Hosted on GitHub Pages</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
