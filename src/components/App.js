/* @flow */

import React from 'react'

import { Layout } from './weather'

import data from '../data/weather.json'

import reduceWeather from '../util'

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
