/* @flow */

import { reduceWeather } from '../util'
import data from '../data/weather.json'

export const INVALIDATE_WEATHER = 'INVALIDATE_WEATHER'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_WEATHER_FULFILLED = 'FETCH_WEATHER_FULFILLED'
export const FETCH_WEATHER_REJECTED = 'FETCH_WEATHER_REJECTED'

export const DEFAULT_CITY = 'London'
export const DEFAULT_COUNTRY = 'UK'

export function invalidateWeather () {
  return (dispatch: Function) => dispatch({ type: INVALIDATE_WEATHER })
}

export function fetchWeather () {
  return (dispatch: Function) => {
    dispatch({ type: FETCH_WEATHER })
    dispatch({ type: FETCH_WEATHER_FULFILLED, payload: reduceWeather(data) })
  }
}
