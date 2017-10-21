/* @flow */

import React from 'react'
import { Navbar } from 'react-bootstrap'

import WeatherContainer from '../containers/WeatherContainer'

const App = () => (
  <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>Five Day Weather</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
    <WeatherContainer />
  </div>
)

export default App
