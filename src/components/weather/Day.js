/* @flow */

import React from 'react'
import { Panel, Table } from 'react-bootstrap'

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
      <Panel header={day}>
        <Table condensed striped>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temp</th>
              <th>Wind Speed</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>{data.map(w => <Row key={w.time} {...w} />)}</tbody>
        </Table>
      </Panel>
    )
  }
}

export default Day
