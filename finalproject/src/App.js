import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Weather from './components/Weather'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Weather />
      </div>
    );
  }
}

export default App;
