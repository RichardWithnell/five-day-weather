/* @flow */

import React from 'react'

import Day from './Day'

import type { WeatherData } from '../../types'

class Layout extends React.PureComponent<WeatherData> {
  static defaultProps = {
    city: '',
    country: '',
    weather: {},
    lastUpdated: null
  }
  render () {
    let { city, country, weather, lastUpdated } = this.props
    return (
      <div>
        <h2>{`${city}, ${country}`}</h2>
        <h6>{lastUpdated !== null ? lastUpdated.toString() : 'Never'}</h6>
        {Object.keys(weather).map(day => (
          <Day key={day} day={day} data={weather[day]} />
        ))}
      </div>
    )
  }
}

export default Layout
