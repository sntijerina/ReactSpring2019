import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"

import { actionCreators } from '../actions/weatherAction';

class Weather extends Component {
    
    render() {
      return (
        <div className="Weather">
            <button type="button" onClick={()=> this.props.actions.getWeather()}> Get Weather</button>
            <p>Current Temp (Chicago): <span>{this.props.temp}°</span></p>
            <p>High: <span>{this.props.temp_max}°</span></p>
            <p>Low: <span>{this.props.temp_min}°</span></p> 

            <p>Is Error: {this.props.isError?"Yes":"No"}</p>
            <p>Error Message: {this.props.errorMessage}</p>
        </div>
      );
    }
  }

  Weather.propTypes = {
    isLoading: PropTypes.bool,
    temp: PropTypes.string,
    temp_max: PropTypes.string,
    temp_min: PropTypes.string,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    actions: PropTypes.shape({ 
      getWeather: PropTypes.func.isRequired
    })
  };

  const mapStateToProps = state => ({
    isLoading: state.weather.isLoading,
    temp: state.weather.temp,
    temp_max: state.weather.temp_max,
    temp_min: state.weather.temp_min,
    isError: state.weather.isError,
    errorMessage: state.weather.errorMessage
  });

  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
          getWeather : actionCreators.getWeather
        },
        dispatch
      )
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (Weather);