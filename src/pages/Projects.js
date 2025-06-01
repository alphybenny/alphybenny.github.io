import React from 'react';

const Projects = () => {
  return (
    <div>
      <div className="terminal-section">
        <h1 className="terminal-title">Projects</h1>
        <div className="mb-6">
          <span className="text-terminal-green">user@developer:~$ </span>
          <span className="text-terminal-yellow">ls -la projects/</span>
        </div>
        
        <div className="terminal-project">
          <h2 className="terminal-subtitle">Data Visualisation Tool</h2>
          <p className="terminal-text">
          A Django-based dashboard for a local hospital's Outpatient Department (OPD) analysis, enabling department-wise and doctor-wise trend analysis. Integrated Python, Pandas, and Matplotlib to provide real-time visual analytics.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">Python</span>
            <span className="terminal-skill">Django</span>
            <span className="terminal-skill">Pandas</span>
            <span className="terminal-skill">Matplotlib</span>
          </div>
          <div className="flex gap-4">
            <a href="https://example.com/ecommerce-demo" className="terminal-link">View Demo</a>
            <a href="https://github.com/username/ecommerce" className="terminal-link">GitHub Repo</a>
          </div>
        </div>

        <div className="terminal-project">
          <h2 className="terminal-subtitle">TheraCare Hx – Patient Engagement Platform</h2>
          {/* Uncomment and update the src if you have an image */}
          {/* <img src={theraCareImg} alt="TheraCare Hx Screenshot" className="w-full max-w-md rounded mb-4" /> */}
          <p className="terminal-text">
            <b>Healthcare Web Application | Streamlit, Python, SQL, FHIR</b>
            <br />
            Designed and developed a responsive web application using <b>Streamlit</b> and <b>Python</b> to capture patient and family medical history aligned with <b>FHIR r4 standards</b>.<br />
            Engineered secure backend workflows using <b>SQL</b> for structured data storage, ensuring compliance with healthcare data standards.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">Streamlit</span>
            <span className="terminal-skill">Python</span>
            <span className="terminal-skill">SQL</span>
            <span className="terminal-skill">FHIR</span>
          </div>
                    <div className="flex gap-4">
            <a href="https://example.com/ecommerce-demo" className="terminal-link">View Demo</a>
            <a href="https://github.com/alphybenny/TheraCareHx" className="terminal-link">GitHub Repo</a>
          </div>
        </div>
      
        
        {/* <div className="terminal-project">
          <h2 className="terminal-subtitle">Task Management App</h2>
          <p className="terminal-text">
            A responsive task management application with drag-and-drop functionality, task categorization, and user collaboration features.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">React</span>
            <span className="terminal-skill">Redux</span>
            <span className="terminal-skill">Firebase</span>
            <span className="terminal-skill">TailwindCSS</span>
          </div>
          <div className="flex gap-4">
            <a href="https://example.com/taskmanager-demo" className="terminal-link">View Demo</a>
            <a href="https://github.com/username/taskmanager" className="terminal-link">GitHub Repo</a>
          </div>
        </div>
        
        <div className="terminal-project">
          <h2 className="terminal-subtitle">Weather Dashboard</h2>
          <p className="terminal-text">
            A weather application that displays current weather conditions and forecasts for multiple locations using the OpenWeatherMap API.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">JavaScript</span>
            <span className="terminal-skill">HTML/CSS</span>
            <span className="terminal-skill">OpenWeatherMap API</span>
            <span className="terminal-skill">Chart.js</span>
          </div>
          <div className="flex gap-4">
            <a href="https://example.com/weather-demo" className="terminal-link">View Demo</a>
            <a href="https://github.com/username/weather" className="terminal-link">GitHub Repo</a>
          </div>
        </div>
        
        <div className="terminal-project">
          <h2 className="terminal-subtitle">Personal Blog</h2>
          <p className="terminal-text">
            A blog platform with content management system, comment functionality, and responsive design.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">React</span>
            <span className="terminal-skill">Node.js</span>
            <span className="terminal-skill">Express</span>
            <span className="terminal-skill">MongoDB</span>
          </div>
          <div className="flex gap-4">
            <a href="https://example.com/blog-demo" className="terminal-link">View Demo</a>
            <a href="https://github.com/username/blog" className="terminal-link">GitHub Repo</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
