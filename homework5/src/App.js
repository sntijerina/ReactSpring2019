import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           My First React App (with Redux)!
          </p>
          <Clock></Clock>
          <Weather></Weather>
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
