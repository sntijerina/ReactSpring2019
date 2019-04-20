import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props) 
  {
    super(props);
    this.state = { date: new Date() };
  }
  
  componentDidMount = ()=> { this.timerID = setInterval(() => this.tick(), 1000) };

  componentWillUnmount = ()=> { clearInterval(this.timerID) };

  tick = ()=> { this.setState({ date: new Date() }); }

  getCurrentDateTime = ()=> { return this.state.date.toLocaleTimeString(); };
  
  render() {
    return (
        <span>Current Time: <span className="clock">{this.getCurrentDateTime()}</span></span>
    );
  }
}

export default Clock;