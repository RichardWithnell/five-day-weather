/* @flow */

import React from 'react'
import { shallow } from 'enzyme'
import { Row } from '../../components/weather'

let row = {
  time: new Date('2017-01-01T12:00:00'),
  temp: 10.0,
  windSpeed: 3.0,
  image: '',
  description: 'rain'
}

describe('Test Row Component', () => {
  it('renders without crashing', () => {
    shallow(<Row {...row} />)
  })
})
