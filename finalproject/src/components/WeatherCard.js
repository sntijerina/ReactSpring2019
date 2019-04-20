import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Clock from "./Clock";
import Weather from "./Weather";

const styles = theme => ({
  card: {
    maxWidth: 600,
    maxHeight: 400
  },
  actions: {
    display: "flex"
  }
});

class WeatherCard extends Component {
  render() {
    const { classes } = this.props;
    const { imgUrl } = this.props.icon;
    return (
            <Card 
              className={classes.card}
            >
            <CardHeader title={this.props.name} subheader={<Clock />} />
            <CardMedia>
              <img src={this.props.icon} alt={this.props.overcast} />
            </CardMedia>
            <CardContent>
              <Typography component="div" >
              <ul>
                <li>Current: <span>{this.props.temp}°</span></li>
                <li>High: <span>{this.props.maxTemp}°</span></li>
                <li>Low: <span>{this.props.minTemp}°</span></li>
              </ul>
              </Typography>
            </CardContent>
          </Card>
    );
  }
}

export default withStyles(styles)(WeatherCard);
