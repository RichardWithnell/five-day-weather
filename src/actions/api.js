/* @flow */
import axios from 'axios'
import { reduceWeather } from '../util'

export const INVALIDATE_WEATHER = 'INVALIDATE_WEATHER'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_WEATHER_FULFILLED = 'FETCH_WEATHER_FULFILLED'
export const FETCH_WEATHER_REJECTED = 'FETCH_WEATHER_REJECTED'

export const DEFAULT_CITY = 'London'
export const DEFAULT_COUNTRY = 'uk'

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY || ''

console.log(process.env)

const API = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export function invalidateWeather () {
  return (dispatch: Function) => dispatch({ type: INVALIDATE_WEATHER })
}

export function fetchWeather () {
  if (!API_KEY) {
    throw new Error('No key provided for OpenWeatherMap API')
  }

  return (dispatch: Function) => {
    dispatch({ type: FETCH_WEATHER })
    return axios
      .get(`${API}&q=${DEFAULT_CITY},${DEFAULT_COUNTRY}&units=metric&mode=json`)
      .then(response => {
        let weather = reduceWeather(response.data)
        dispatch({ type: FETCH_WEATHER_FULFILLED, payload: weather })
      })
      .catch(err => {
        console.error(err)
        dispatch({
          type: FETCH_WEATHER_REJECTED,
          payload: 'Failed to fetch weather'
        })
      })
  }
}
