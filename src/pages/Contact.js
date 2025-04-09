import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="terminal-section">
        <h1 className="terminal-title">Contact</h1>
        <div className="mb-6">
          <span className="text-terminal-green">user@developer:~$ </span>
          <span className="text-terminal-yellow">cat contact.txt</span>
        </div>
        
        <p className="terminal-text mb-8">
          I'm always open to new opportunities, collaborations, or just a friendly chat about technology.
          Feel free to reach out through any of the following methods:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="terminal-container p-4">
            <h2 className="terminal-subtitle">Email</h2>
            <p className="text-terminal-cyan">alphybenny@gmail.com</p>
          </div>
          
          <div className="terminal-container p-4">
            <h2 className="terminal-subtitle">LinkedIn</h2>
            <a href="https://linkedin.com/in/alphy-benny-950410181" className="terminal-link">linkedin.com/in/alphy-benny</a>
          </div>
          
          <div className="terminal-container p-4">
            <h2 className="terminal-subtitle">GitHub</h2>
            <a href="https://github.com/developer" className="terminal-link">github.com/developer</a>
          </div>
          
          <div className="terminal-container p-4">
            <h2 className="terminal-subtitle">Twitter</h2>
            <a href="https://twitter.com/developer" className="terminal-link">twitter.com/developer</a>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="terminal-subtitle">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input 
                type="text" 
                id="name" 
                className="terminal-input w-full" 
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input 
                type="email" 
                id="email" 
                className="terminal-input w-full" 
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea 
                id="message" 
                rows="5" 
                className="terminal-input w-full" 
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button type="submit" className="terminal-button">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="mb-6">
          <span className="text-terminal-green">user@developer:~$ </span>
          <span className="text-terminal-yellow">echo "Looking forward to connecting with you!"</span>
        </div>
        <p className="text-terminal-cyan">Looking forward to connecting with you!</p>
      </div>
    </div>
  );
};

export default Contact;
