import axios from 'axios';
import {API_KEY} from '../config'


const apiUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;
const defaultLocation = 'chicago';

const GetWeatherApi = event => {
    const location = event || defaultLocation;
    const encodedLocation = encodeURIComponent(location);
    let url = `${apiUrl}&q=${encodedLocation}`;
    return axios.get(url);
};

export default GetWeatherApi;