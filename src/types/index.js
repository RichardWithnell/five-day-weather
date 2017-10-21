/* @flow */

export type Wind = {
  speed: number,
  direction: number
}

export type WeatherRow = {
  time: string,
  temp: number,
  wind: Wind,
  image: string,
  description: string
}

export type WeatherDay = {
  day: string,
  data: Array<WeatherRow>
}

export type WeatherData = {
  city: string,
  country: string,
  weather: Object,
  days: Array<string>,
  lastUpdated: Date | null
}
