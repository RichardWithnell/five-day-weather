/* @flow */

import React from 'react'

import Day from './Day'

import type { WeatherData } from '../../types'

class Layout extends React.PureComponent<WeatherData> {
  static defaultProps = {
    city: '',
    country: '',
    weather: {},
    days: [],
    lastUpdated: null
  }
  render () {
    let { city, country, days, weather, lastUpdated } = this.props
    return (
      <div>
        <h2>{`${city}, ${country}`}</h2>
        <h6>{lastUpdated !== null ? lastUpdated.toString() : 'Never'}</h6>
        {days
          .sort()
          .reverse()
          .map(day => <Day key={day} day={day} data={weather[day]} />)}
      </div>
    )
  }
}

export default Layout
