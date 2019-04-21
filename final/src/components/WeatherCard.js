import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import './WeatherCard.css';

class WeatherCard extends Component {
  render() {

    return (
            <Card className="weather-card">
            <div className="weather-card-image">
              <img src={this.props.icon} alt={this.props.overcast} className="weather-card-icon"/>
            </div> 
            <div className="weather-card-details">
              <CardContent className="weather-card-content">
                <Typography component="h5" variant="h5" >
                  {this.props.name} {this.props.temp}°
                </Typography>
                <Typography variant="subtitle1">
                    {this.props.overcast}
                </Typography>
                <Typography variant="subtitle2">
                  <span className="weather-card-detail"><b>High:</b> {this.props.maxTemp}°</span>
                  <span className="weather-card-detail"><b>Low:</b> {this.props.minTemp}°</span>
                </Typography>
                <Typography variant="subtitle2">
                  <span className="weather-card-detail"><b>Humidity:</b> {this.props.humidity}%</span>
                  <span className="weather-card-detail"><b>Pressure:</b> {this.props.pressure}hPa</span>
                  <span className="weather-card-detail"><b>Wind:</b> {this.props.wind}m/h</span>
                </Typography>
              </CardContent>
            </div>
            
          </Card>
    );
  }
}

export default WeatherCard;