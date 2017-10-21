/* @flow */

export type WeatherRow = {
  time: Date,
  temp: number,
  windSpeed: number,
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
  lastUpdated: Date | null
}
