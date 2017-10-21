/* @flow */

import React from 'react'

import { Layout } from './weather'

import data from '../data/weather.json'

import { format } from 'date-fns'

export const reduceWeather = (data: Object): Object => {
  return data.list.reduce((acc, w) => {
    const bucket = format(new Date(w.dt_txt), 'DD/MM/YYYY')
    if (!(bucket in acc)) {
      acc[bucket] = []
    }
    acc[bucket].push({
      time: format(new Date(w.dt_txt), 'HH:mm'),
      temp: w.main.temp,
      wind: w.wind,
      description: w.weather[0].description,
      image: `http://openweathermap.org/img/w/${w.weather[0].icon}.png`
    })
    return acc
  }, {})
}

const App = () => {
  let city = data.city.name
  let country = data.city.country

  return (
    <div>
      <h1>Five Day Weather</h1>
      <Layout
        lastUpdated={new Date()}
        country={country}
        city={city}
        weather={reduceWeather(data)}
      />
    </div>
  )
}

export default App
