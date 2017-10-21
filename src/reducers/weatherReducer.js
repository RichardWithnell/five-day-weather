/* @flow */

import {
  INVALIDATE_WEATHER,
  FETCH_WEATHER,
  FETCH_WEATHER_FULFILLED,
  FETCH_WEATHER_REJECTED,
  DEFAULT_CITY,
  DEFAULT_COUNTRY
} from '../actions/api'

export default function reducer (
  state: Object = {
    fetching: false,
    fetched: false,
    didInvalidate: true,
    error: null,
    byId: {},
    allIds: [],
    lastUpdated: null,
    city: DEFAULT_CITY,
    country: DEFAULT_COUNTRY
  },
  action: Object
) {
  switch (action.type) {
    case INVALIDATE_WEATHER: {
      return { ...state, didInvalidate: true }
    }
    case FETCH_WEATHER: {
      return { ...state, fetching: true }
    }
    case FETCH_WEATHER_FULFILLED: {
      return {
        ...state,
        byId: action.payload,
        allIds: Object.keys(action.payload),
        error: null,
        fetching: false,
        fetched: true,
        lastUpdated: new Date()
      }
    }
    case FETCH_WEATHER_REJECTED: {
      return {
        ...state,
        error: action.payload,
        fetching: false,
        fetched: false
      }
    }
    default: {
      return { ...state }
    }
  }
}
