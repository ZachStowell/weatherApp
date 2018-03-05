import * as types from '../types';
import axios from 'axios';
import { WEATHER_URL, GEOCODING_URL } from '../../config/services';

export const fetchWeather = address => async dispatch => {
  dispatch({ type: types.FETCH_WEATHER_DATA });
  try {
    // Fetch the geolocation data from Google
    let locationResult = await axios.post(GEOCODING_URL, { address });
    const location = locationResult.data;
    // Fetch the weather data from DarkSky
    let weatherResult = await axios.post(WEATHER_URL, location);
    let data = weatherResult.data;
    // add the location data to the weather data
    data.location = location;

    dispatch({ type: types.FETCH_WEATHER_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: types.FETCH_WEATHER_DATA_ERROR, payload: err });
  }
};

export const clearWeatherData = () => {
  return { type: types.CLEAR_WEATHER_DATA };
};
