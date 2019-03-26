import React, { Component } from 'react';
import './Clock.css';

interface IState {
  date: Date;
}

interface IProps {}

class Clock extends Component<IProps, IState> {
  
  private timerID: any;

  constructor(props: any) 
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
      <p>Current Date/Time: <span className="clock">{this.getCurrentDateTime()}</span></p>
    );
  }
}   

export default Clock;