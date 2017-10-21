/* @flow */

import React from 'react'

import type { WeatherRow } from '../../types'

class Row extends React.PureComponent<WeatherRow> {
  static defaultProps = {
    time: '',
    temp: 0.0,
    wind: { speed: 0.0, direction: 0.0 },
    image: '',
    description: ''
  }

  render () {
    let { time, temp, wind, image, description } = this.props
    return (
      <div>
        {`${time.toString()} - ${temp} °C - ${wind.speed} mph - `}{' '}
        <img src={image} alt={description} />
      </div>
    )
  }
}

export default Row
