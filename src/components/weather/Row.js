/* @flow */

import React from 'react'

import type { WeatherRow } from '../../types'

class Row extends React.PureComponent<WeatherRow> {
  static defaultProps = {
    time: '',
    temp: 0.0,
    windSpeed: 0.0,
    image: '',
    description: ''
  }

  render () {
    let { time, temp, windSpeed, image, description } = this.props
    return (
      <div>
        {`${time.toString()} - ${temp} °C - ${windSpeed} mph - `}{' '}
        <img src={image} alt={description} />
      </div>
    )
  }
}

export default Row
