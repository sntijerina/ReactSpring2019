import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_RESPONSE, FETCH_WEATHER_ERROR } from './actionTypes';
import axios from "axios";

const apiKey = '75ca74d04777316985b8b57142df457b';
const url = `http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${apiKey}&units=imperial`;

export const weatherState = {
    isLoading: false,
    temp: null,
    temp_max: null,
    temp_min: null,
    isError: false,
    errorMessage: null
}

export const actionCreators = {

    getWeather: () => async dispatch => {
        dispatch({
            type: FETCH_WEATHER_REQUEST,
            payload: {
                isLoading: true
            }
        });

        axios.get(url)
        .then(response => { 
            dispatch({ 
                type: FETCH_WEATHER_RESPONSE,
                payload: {
                    isLoading: false,
                    isError: false,
                    temp: response.data.main.temp,
                    temp_min: response.data.main.temp_min, 
                    temp_max: response.data.main.temp_max
                }
            });
        })
        .catch(error => {
            console.log(error);

            dispatch({
                type: FETCH_WEATHER_ERROR,
                payload: {
                    isLoading: false,
                    isError: true,
                    errorMessage: `${error.error} ${error.errorMessage}`
                }
            });
        });
    }
}
