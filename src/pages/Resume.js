import React from 'react';
import resumepdf from '../assets/Alphy_Benny_Resume.pdf';

const Resume = () => {
  return (
    <div>
      <div className="terminal-section">
        <h1 className="terminal-title">Resume</h1>
        <div className="mb-6">
          <span className="text-terminal-green">user@developer:~$ </span>
          <span className="text-terminal-yellow">cat resume.md</span>
        </div>
        
        <div className="mb-8">
          <h2 className="terminal-subtitle">Education</h2>
          <div className="mb-4 border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-yellow">Bachelor of Science in Computer Science</h3>
            <p className="text-terminal-cyan">APJ Abdul Kalam Technological University | 2017 - 2021 | Kerala, India</p>
            <p className="terminal-text">
              Graduated with honors. Coursework included Data Structures, Algorithms, 
              Software Engineering, Database Systems, and Web Development.
            </p>
          </div>
          <div className="mb-4 border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-yellow">Master's, Information Technology and Management</h3>
            <p className="text-terminal-cyan">Illinois Institute of Technology | 2023 - 2025 | Chicago, USA</p>
            <p className="terminal-text">
              Relevant Coursework: Data structures and algorithms, Computer System Architecture, Computer Networks, Open Source Software.
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="terminal-subtitle">Work Experience</h2>
          
          <div className="mb-4 border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-yellow">Software Developer Consultant</h3>
            <p className="text-terminal-cyan">Leap of Faith Technologies, Inc | 2024 - Present | Chicago, USA</p>
            <ul className="list-disc list-inside terminal-text">
            <li>Developed and optimized applications for Electronic Health Record (EHR) data management and integration using Python, Java, NLP, HL7 & FHIR enhancing data processing efficiency.</li>
              <li>Implemented AWS-based AI-driven ETL pipelines using Amazon Bedrock LLM, OCR, and NLP to convert handwritten medical records from the 1800s into structured, searchable text, improving data accessibility by 30%.</li>
              <li>Built an ETL tool using Python to integrate clinical data in FHIR, JSON, and CSV formats into the OMOP Common Data Model (CDM), ensuring interoperability.</li>
              <li>Designed and developed a parallel processing DNA oncogenicity analysis system using Celery, RESTful APIs, and rule-based scoring, reducing computation time by 40%.</li>
            </ul>
          </div>
          
          <div className="mb-4 border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-yellow">Graduate Teaching Assistant</h3>
            <p className="text-terminal-cyan">Illinois Institute of Technology | January 2024 - Present</p>
            <ul className="list-disc list-inside terminal-text">
            <li>Addressed and resolved student queries, mentoring over 100 students in a graduate-level course on human-computer interaction, leading to improved student understanding and engagement.</li>
            </ul>
          </div>
          
          <div className="mb-4 border-l-2 border-terminal-green pl-4">
            <h3 className="text-terminal-yellow">Software Developer</h3>
            <p className="text-terminal-cyan">UST | 2021 - 2023</p>
            <ul className="list-disc list-inside terminal-text">
            <li>Engineered and deployed a document parsing system using C#, .NET, and Azure, improving data extraction efficiency by 20%.</li>
              <li>Developed microservices-based applications, implementing REST APIs to enhance system modularity and scalability, resulting in improved system performance and easier maintenance.</li>
              <li>Designed and built a File Parser UI using Angular, enabling JSON-based parsing rule configuration, reducing configuration time by 30%.</li>
              <li>Optimized application performance and cost-efficiency using Azure cloud technologies (Azure Functions, Azure Blob Storage, and Cosmos DB) leading to faster processing times and reduced operational costs.</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="terminal-subtitle">Certifications</h2>
          <ul className="list-disc list-inside terminal-text">
            <li>Microsoft Certified: Azure Data Fundamentals DP-900</li>
            <li>Microsoft Certified: Azure Fundamentals AZ-900</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="terminal-subtitle">Leadership experiences</h2>
          <ul className="list-disc list-inside terminal-text">
            <li>Senator at Student Government Organisation of IIT</li>
          </ul>
        </div>
        
        
        <div className="mb-4">
          <a href={resumepdf} download>
          <button className="terminal-button">
          Download Full Resume (PDF)
          </button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Resume;
