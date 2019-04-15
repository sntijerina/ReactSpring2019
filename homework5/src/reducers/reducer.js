import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_RESPONSE, FETCH_WEATHER_ERROR } from '../actions/actionTypes';
import { weatherState } from '../actions/weatherAction'

export const reducer = (state, action) => {
    state = state || weatherState;
    
    switch (action.type) {
        case FETCH_WEATHER_REQUEST: 
        case FETCH_WEATHER_RESPONSE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                isError: action.payload.isError,
                temp: action.payload.temp,
                temp_max: action.payload.temp_max,
                temp_min: action.payload.temp_min
            };
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                isError: action.payload.isError,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
}