/* @flow */

import React from 'react'

import { Layout } from './weather'

const App = () => {
  let data = {
    '01/01/2017': [
      {
        time: new Date('2017-01-01T12:00:00'),
        temp: 10.0,
        windSpeed: 3.0,
        image: '',
        description: 'rain'
      },
      {
        time: new Date('2017-01-01T13:00:00'),
        temp: 15.0,
        windSpeed: 2.0,
        image: '',
        description: 'rain'
      },
      {
        time: new Date('2017-01-01T14:00:00'),
        temp: 8.0,
        windSpeed: 1.0,
        image: '',
        description: 'rain'
      }
    ],
    '01/02/2017': [
      {
        time: new Date('2017-02-01T12:00:00'),
        temp: 10.0,
        windSpeed: 3.0,
        image: '',
        description: 'sun'
      },
      {
        time: new Date('2017-02-01T13:00:00'),
        temp: 15.0,
        windSpeed: 2.0,
        image: '',
        description: 'sun'
      },
      {
        time: new Date('2017-02-01T14:00:00'),
        temp: 8.0,
        windSpeed: 1.0,
        image: '',
        description: 'cloud'
      }
    ]
  }

  return (
    <div>
      <h1>Five Day Weather</h1>
      <Layout
        lastUpdated={new Date()}
        country={'UK'}
        city={'London'}
        weather={data}
      />
    </div>
  )
}

export default App
