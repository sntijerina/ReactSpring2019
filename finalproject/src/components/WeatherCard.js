import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Clock from "./Clock";

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: 20,
    width: 450
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: '1 0 auto',
  },
  icon: {
    width: 75,
    height: 75
  },
  detail: {
    marginRight: 5
  }
});

class WeatherCard extends Component {
  render() {
    const { classes } = this.props;
   
    return (
            <Card className={classes.card}>
            <div className={classes.image}>
              <img src={this.props.icon} alt={this.props.overcast} className={classes.icon}/>
            </div> 
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5" >
                  {this.props.name} {this.props.temp}°
                </Typography>
                <Typography variant="subtitle1">
                    {this.props.overcast}
                </Typography>
                <Typography variant="subtitle2">
                  <span className={classes.detail}><b>High:</b> {this.props.maxTemp}°</span>
                  <span className={classes.detail}><b>Low:</b> {this.props.minTemp}°</span>
                </Typography>
                <Typography variant="subtitle2">
                  <span className={classes.detail}><b>Humidity:</b> {this.props.humidity}%</span>
                  <span className={classes.detail}><b>Pressure:</b> {this.props.pressure}hPa</span>
                  <span className={classes.detail}><b>Wind:</b> {this.props.wind}m/h</span>
                </Typography>
              </CardContent>
            </div>
            
          </Card>
    );
  }
}

export default withStyles(styles)(WeatherCard);
