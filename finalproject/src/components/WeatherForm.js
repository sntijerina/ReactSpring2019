import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

class WeatherForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        typeof this.props.onFormSubmit === 'function' &&
            this.props.onFormSubmit(event.target.elements.city.value);
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                    <input type="text" name="city" placeholder="City..."/>
                    <button type="submit">Get Weather</button>
            </form>
        );
    }
}

export default WeatherForm;
