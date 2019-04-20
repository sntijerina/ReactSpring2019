import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import WeatherForm from './WeatherForm';
import WeatherCard from './WeatherCard';
import axios from 'axios';

const weatherMapApiKey = '75ca74d04777316985b8b57142df457b';
const weatherMapApiUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${weatherMapApiKey}&units=imperial`;
const defaultLocation = 'chicago';

class Weather extends Component {
    
    constructor(props) 
    {
      super(props);

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

    componentDidMount = ()=> { this.getWeather(defaultLocation) };

    getWeather(location) {
        let self = this;
        const encodedLocation = encodeURIComponent(location);
        let apiUrl = `${weatherMapApiUrl}&q=${encodedLocation}`;
     
        axios.get(apiUrl)
        .then(response => { 
            console.log(response);
            self.setState({ 
                name: response.data.name,
                temp: response.data.main.temp,
                minTemp: response.data.main.temp_min, 
                maxTemp: response.data.main.temp_max,
                pressure: response.data.main.pressure,
                humidity: response.data.main.humidity,
                wind: response.data.wind,
                overcast: response.data.weather[0].description,
                icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
            });
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