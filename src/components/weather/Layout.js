/* @flow */

import React from 'react'

import Day from './Day'

type Props = {
  city: string,
  country: string,
  weather: Object,
  lastUpdated: Date | null
}

class Layout extends React.PureComponent<Props> {
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
