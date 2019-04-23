import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import './WeatherCard.css';

export default function WeatherCard (props) {
    return (
            <Card className="weather-card">
            <div className="weather-card-image">
              <img src={props.icon} alt={props.overcast} className="weather-card-icon"/>
            </div> 
            <div className="weather-card-details">
              <CardContent className="weather-card-content">
                <Typography component="h5" variant="h5" >
                  {props.name} {props.temp}°
                </Typography>
                <Typography variant="subtitle1">
                    {props.overcast}
                </Typography>
                <Typography variant="subtitle2">
                  <span className="weather-card-detail"><b>High:</b> {props.maxTemp}°</span>
                  <span className="weather-card-detail"><b>Low:</b> {props.minTemp}°</span>
                </Typography>
                <Typography variant="subtitle2">
                  <span className="weather-card-detail"><b>Humidity:</b> {props.humidity}%</span>
                  <span className="weather-card-detail"><b>Pressure:</b> {props.pressure}hPa</span>
                  <span className="weather-card-detail"><b>Wind:</b> {props.wind}m/h</span>
                </Typography>
              </CardContent>
            </div>
          </Card>
    );
}