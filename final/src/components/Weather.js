import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import WeatherForm from './WeatherForm';
import WeatherCard from './WeatherCard';
import GetWeatherApi from "../api/GetWeatherApi";

class Weather extends Component {
    
    constructor() 
    {
      super();
      this.state  = { 
        name: '',
        temp: '', 
        minTemp: '', 
        maxTemp: '',
        pressure: '',
        humidity: '',
        wind: '',
        overcast: '',
        icon:'',
        error: ''
      };

      this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount = ()=> { this.getWeather() };

    getWeather = event => {
      let self = this;
      return GetWeatherApi(event)
        .then(response => { 
          console.log(response);
          self.setState({ 
              name: response.data.name,
              temp: response.data.main.temp,
              minTemp: response.data.main.temp_min, 
              maxTemp: response.data.main.temp_max,
              pressure: response.data.main.pressure,
              humidity: response.data.main.humidity,
              wind: response.data.wind.speed,
              overcast: response.data.weather[0].description,
              icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
          })
        })
        .catch(error => {
          console.log(error);
        });
    }

    render() {
      return (
        <Grid
          spacing={0}
          container
          alignItems="center"
          direction="column"
          style={{ minHeight: "100vh" }}
          justify="center"
        >
        <Grid item xs={3}>
          <WeatherForm onFormSubmit={this.getWeather}/>
          <WeatherCard
            name = { this.state.name }
            temp = { this.state.temp } 
            maxTemp = { this.state.maxTemp }
            minTemp = { this.state.minTemp }
            wind = { this.state.wind }
            pressure = { this.state.pressure }
            humidity = { this.state.humidity }
            overcast = { this.state.overcast }
            icon = { this.state.icon }
            />     
        </Grid>
      </Grid>       
      );
    }
  }
  
  export default Weather;