import React from 'react'
import { shallow } from 'enzyme'
import { Day, Layout } from '../../components/weather'

describe('Test Layout Component', () => {
  it('renders without crashing', () => {
    shallow(<Layout />)
  })

  it('should contain no days by default', () => {
    const layout = shallow(<Layout />)
    const days = layout.find(Day)
    expect(days.length).toEqual(0)
  })

  it('should contain no city/country by default', () => {
    const layout = shallow(<Layout />)
    const header = layout.find('h2').text()
    expect(header).toEqual(', ')
  })

  let props = {
    lastUpdated: new Date(),
    country: 'UK',
    city: 'London',
    weather: {
      '2017-01-01': [],
      '2017-02-01': [],
      '2017-03-01': [],
      '2017-04-01': [],
      '2017-05-01': []
    }
  }

  it('should contain five days', () => {
    const layout = shallow(<Layout {...props} />)
    const days = layout.find(Day)
    expect(days.length).toEqual(5)
  })

  it('should contain `London, UK`, when passed as a prop', () => {
    const layout = shallow(<Layout {...props} />)
    const header = layout.find('h2').text()
    expect(header).toEqual('London, UK')
  })
})
