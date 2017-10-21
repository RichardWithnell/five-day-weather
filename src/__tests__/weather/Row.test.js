import React from 'react'
import { shallow } from 'enzyme'
import { Row } from '../../components/weather'

describe('Test Row Component', () => {
  it('renders without crashing', () => {
    shallow(<Row />)
  })

  let props = {
    time: '13:00',
    temp: 10.0,
    windSpeed: 4.0,
    image: '',
    description: 'rain'
  }

  it('renders props correctly', () => {
    shallow(<Row {...props} />)
  })
})
