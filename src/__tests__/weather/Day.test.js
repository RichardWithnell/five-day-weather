import React from 'react'
import { shallow } from 'enzyme'
import { Day, Row } from '../../components/weather'

describe('Test Day Component', () => {
  it('renders without crashing', () => {
    shallow(<Day />)
  })

  let props = {
    day: '2017-01-01',
    data: [
      {
        time: '13:00',
        temp: 10.0,
        windSpeed: 4.0,
        image: '',
        description: 'rain'
      },
      {
        time: '14:00',
        temp: 12.0,
        windSpeed: 8.0,
        image: '',
        description: 'rain'
      }
    ]
  }

  it('renders props correctly', () => {
    let day = shallow(<Day {...props} />)
    const rows = day.find(Row)
    expect(rows.length).toEqual(2)
  })
})
