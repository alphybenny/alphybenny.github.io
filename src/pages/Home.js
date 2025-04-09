import React from 'react';
import AlphyFormals1 from '../assets/Alphy_Formals1.jpg';

const Home = () => {
  return (
    <div>
      <div className="terminal-section">
        <h1 className="terminal-title">Welcome to My Terminal</h1>
          <div className="flex justify-start mb-6">
          <img
            src={AlphyFormals1}
            alt="My Photo"
            className="rounded-full w-32 h-32 object-cover shadow-lg"
          />
        </div>
        <div className="mb-6">
          <span className="text-terminal-green">user@developer:~$ </span>
          <span className="text-terminal-yellow">whoami</span>
        </div>
        <p className="terminal-text">
          Hello! My name is Alphy Benny. I'm a passionate software developer with expertise in building applications that are both functional and user-friendly. 
            Currently pursuing a Master's in Information Technology and Management at Illinois Institute of Technology, 
            I bring professional experience from my roles at Leap of Faith Technologies and UST.
          This terminal-themed portfolio showcases my skills, projects, and experience.
        </p>
        <div className="mb-6">
          <span className="text-terminal-green">user@developer:~$ </span>
          <span className="text-terminal-yellow">ls -la skills/</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
        < span className="terminal-skill">.NET</span>
          <span className="terminal-skill">C#</span>
          <span className="terminal-skill">JavaScript</span>
          <span className="terminal-skill">React</span>
          <span className="terminal-skill">Node.js</span>
          <span className="terminal-skill">Python</span>
          <span className="terminal-skill">Git</span>
          <span className="terminal-skill">Docker</span>
          <span className="terminal-skill">Azure</span>


        </div>
        <div className="mb-6">
          <span className="text-terminal-green">user@developer:~$ </span>
          <span className="text-terminal-yellow">cat about.txt</span>
        </div>
        <p className="terminal-text">
          I specialize in full-stack development with a focus on creating responsive, 
          user-friendly applications. With a strong foundation in computer science and 
          a passion for learning new technologies, I'm always looking for new challenges 
          and opportunities to grow as a developer.
        </p>
        <p className="terminal-text">
        I'm currently a Software Developer Intern at Leap of Faith Technologies, Inc. in Chicago, where I develop applications 
            for Electronic Health Record (EHR) data management using Python, Java, NLP, HL7 & FHIR.
          </p>
          <p className="terminal-text">
            Previously, I worked as a Software Developer at UST where I engineered document parsing systems and developed 
            microservices-based applications with REST APIs.
          </p>
          <p className="texrminal-text">
            I hold Microsoft certifications in Azure Data Fundamentals (DP-900) and Azure Fundamentals (AZ-900), and I'm 
            currently serving as a Senator at the Student Government Organization of IIT.
          </p>
      </div>
    </div>
  );
};

export default Home;
