/* @flow */

import React from 'react'
import { shallow } from 'enzyme'
import { Layout } from '../../components/weather'

describe('Test Layout Component', () => {
  it('renders without crashing', () => {
    shallow(<Layout />)
  })
})
