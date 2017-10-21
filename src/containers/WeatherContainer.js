/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Layout } from '../components/weather'
import ErrorText from '../components/Error'
import Loading from '../components/Loading'

import { fetchWeather, invalidateWeather } from '../actions/api'

type Props = {
  fetchWeather: Function,
  weather: Object
}

type State = {
  error: string | null
}

class WeatherContainer extends Component<Props, State> {
  constructor () {
    super()
    this.state = {
      error: null
    }
  }

  componentDidMount () {
    this.props.fetchWeather()
  }

  componentDidCatch (error, info) {
    this.setState({
      error: error.tiString()
    })
  }

  render () {
    let { city, country, lastUpdated, byId, allIds } = this.props.weather

    if (this.state.error !== null) {
      return <ErrorText message={this.state.error.toString()} />
    } else if (this.props.weather.error !== null) {
      return <ErrorText message={this.props.weather.error} />
    } else if (this.props.weather.fetching) {
      return <Loading />
    } else {
      return (
        <Layout
          city={city}
          country={country}
          lastUpdated={lastUpdated}
          weather={byId}
          days={allIds}
        />
      )
    }
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
