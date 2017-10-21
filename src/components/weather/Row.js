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
      <tr>
        <td>{`${time}`}</td>
        <td>{`${temp} °C`}</td>
        <td>{`${wind.speed}  MPH`}</td>
        <td>
          <img
            style={{ width: '24px', height: '24px' }}
            alt={description}
            src={image}
          />
        </td>
      </tr>
    )
  }
}

export default Row
