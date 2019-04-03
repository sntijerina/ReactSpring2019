import React, { Component } from 'react';
import axios from 'axios';

const apiKey = '75ca74d04777316985b8b57142df457b';
const url = `http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${apiKey}&units=imperial`;

class Weather extends Component {
    
    constructor(props) 
    {
      super(props);
      this.state = { temp: '',  minTemp: '', maxTemp: ''};
    }

    componentDidMount = ()=> { this.getWeather() };
    
    getWeather() {
        axios.get(url)
        .then(response => { 
            console.log(response);
            this.setState({ 
                temp: response.data.main.temp,
                minTemp: response.data.main.temp_min, 
                maxTemp: response.data.main.temp_max
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
      return (
        <div className="Weather">
            <p>Current Temp (Chicago): <span>{this.state.temp}°</span></p>
            <p>High: <span>{this.state.maxTemp}°</span></p>
            <p>Low: <span>{this.state.minTemp}°</span></p>
        </div>
      );
    }
  }
  
  export default Weather;