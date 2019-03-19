import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DateTime.css';

class CurrentDateTime extends Component {
  
  getCurrentDateTime = ()=> { return new Date().toLocaleString(); };

  render() {
    return (
      <p>Current Date/Time: <span className="date-time">{this.getCurrentDateTime()}</span></p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My First React App!
          </p>
          
          <CurrentDateTime></CurrentDateTime>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
