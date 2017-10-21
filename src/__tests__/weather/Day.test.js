/* @flow */

import React from 'react'
import { shallow } from 'enzyme'
import { Day } from '../../components/weather'

describe('Test Day Component', () => {
  it('renders without crashing', () => {
    shallow(<Day />)
  })
})
