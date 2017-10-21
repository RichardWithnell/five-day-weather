/* @flow */

import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { format } from 'date-fns'

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
    let updateString = lastUpdated ? format(lastUpdated, 'HH:mm') : 'Never'

    return (
      <Grid>
        <Row>
          <h2 style={{ textAlign: 'center' }}>{`${city}, ${country}`}</h2>
          <h5 style={{ textAlign: 'center' }}>Last Updated: {updateString}</h5>
        </Row>
        <Row>
          {days
            .sort()
            .reverse()
            .map(d => (
              <Col xs={12} sm={6} md={4} lg={3} key={d}>
                <Day day={d} data={weather[d]} />
              </Col>
            ))}
        </Row>
      </Grid>
    )
  }
}

export default Layout
