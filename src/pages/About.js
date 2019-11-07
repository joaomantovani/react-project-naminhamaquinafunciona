import React from 'react';
import logo from './../styles/logo.svg';
import './../styles/App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            About page
        </p>
        <a
          className="About-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About page
        </a>
      </header>
    </div>
  );
}

export default About;
