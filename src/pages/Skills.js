import React from 'react';

const Skills = () => {
  return (
    <div>
      <div className="terminal-section">
        <h1 className="terminal-title">Skills</h1>
        <div className="mb-6">
          <span className="text-terminal-green">user@developer:~$ </span>
          <span className="text-terminal-yellow">cat skills.json</span>
        </div>
        
        <div className="mb-8">
          <h2 className="terminal-subtitle">Languages/Frameworks</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">C#</span>
            <span className="terminal-skill">Java</span>
            <span className="terminal-skill">Python</span>
            <span className="terminal-skill">.NET</span>
            <span className="terminal-skill">HTML5</span>
            <span className="terminal-skill">CSS3</span>
            <span className="terminal-skill">JavaScript</span>
            <span className="terminal-skill">TypeScript</span>
            <span className="terminal-skill">React.js</span>
            <span className="terminal-skill">Angular</span>
            <span className="terminal-skill">TailwindCSS</span>

          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="terminal-subtitle">Backend Development</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">Node.js</span>
            <span className="terminal-skill">Python</span>
            <span className="terminal-skill">Django</span>
            <span className="terminal-skill">RESTful APIs</span>
            <span className="terminal-skill">GraphQL</span>
            <span className="terminal-skill">SQL</span>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="terminal-subtitle">DevOps & Tools</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">Git</span>
            <span className="terminal-skill">GitHub</span>
            <span className="terminal-skill">Docker</span>
            <span className="terminal-skill">CI/CD</span>
            <span className="terminal-skill">AWS</span>
            <span className="terminal-skill">Linux</span>
            <span className="terminal-skill">Bash</span>
            <span className="terminal-skill">Postman</span>
            <span className="terminal-skill">ETL</span>
            <span className="terminal-skill">OMOP</span>
            <span className="terminal-skill">HL7</span>
            <span className="terminal-skill">FHIR</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="terminal-subtitle">Dat</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="terminal-skill">Git</span>
            <span className="terminal-skill">GitHub</span>
            <span className="terminal-skill">Docker</span>
            <span className="terminal-skill">CI/CD</span>
            <span className="terminal-skill">AWS</span>
            <span className="terminal-skill">Linux</span>
            <span className="terminal-skill">Bash</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
