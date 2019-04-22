import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function WeatherForm(props) {
    const [city, setCity] = useState(undefined);

    function handleSubmit (event) {
        event.preventDefault();
        typeof props.onFormSubmit === 'function' &&
            props.onFormSubmit(city);
    }

    return (
        <form onSubmit = {handleSubmit}>
                <TextField 
                    type="text" 
                    name="city" 
                    placeholder="City..." 
                    onChange={event => setCity(event.target.value)}
                />
                <Button  
                    variant="contained" 
                    color="primary" 
                    type="submit">
                    Get Weather
                </Button>
        </form>
    )
}

