import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class WeatherForm extends Component {
    constructor() {
        super();

        this.state = {
            city: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        typeof this.props.onFormSubmit === 'function' &&
            this.props.onFormSubmit(this.state.city);
    }

    handleChange = event => {
        let value = event.target.value;
        this.setState({ city: value });
    };

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                    <TextField 
                        type="text" 
                        name="city" 
                        placeholder="City..." 
                        onChange={this.handleChange}
                    />
                    <Button  
                        variant="contained" 
                        color="primary" 
                        type="submit">
                        Get Weather
                    </Button>
            </form>
        );
    }
}

export default WeatherForm;
