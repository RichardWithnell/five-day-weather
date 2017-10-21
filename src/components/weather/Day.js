/* @flow */

import React from 'react'
import Row from './Row'

import type { WeatherDay } from '../../types'

class Day extends React.PureComponent<WeatherDay> {
  static defaultProps = {
    day: '',
    data: []
  }

  render () {
    let { data, day } = this.props
    return (
      <div>
        <h1>{day}</h1>
        {data.map(w => <Row key={w.time} {...w} />)}
      </div>
    )
  }
}

export default Day
