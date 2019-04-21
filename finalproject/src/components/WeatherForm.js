import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
                    <TextField type="text" name="city" placeholder="City..."/>
                    <Button  variant="contained" color="primary" type="submit">Get Weather</Button>
            </form>
        );
    }
}

export default WeatherForm;
