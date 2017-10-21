/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchWeather, invalidateWeather } from '../actions/api'

import { Layout } from '../components/weather'

type Props = {
  fetchWeather: Function,
  weather: Object
}

type State = {
  error: string | null
}

class WeatherContainer extends Component<Props, State> {
  componentDidMount () {
    this.props.fetchWeather()
  }

  render () {
    return <Layout />
  }
}

const mapStateToProps = state => {
  const { weather } = state

  return {
    weather
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchWeather: () => dispatch(fetchWeather()),
    invalidateWeather: () => dispatch(invalidateWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)
