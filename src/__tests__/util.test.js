import data from '../data/weather.json'
import trimmed from '../data/trimmed.json'

import { reduceWeather } from '../util'

describe('Test Util functions', () => {
  it('reduceWeather should return an object with 2 days of data', () => {
    let res = reduceWeather(trimmed)
    expect(Object.keys(res).length).toEqual(2)
    expect(res).toEqual({
      '21/10/2017': [
        {
          description: 'light rain',
          image: 'http://openweathermap.org/img/w/10n.png',
          temp: 12.22,
          time: '18:00',
          wind: {
            deg: 225.004,
            speed: 9.71
          }
        }
      ],
      '26/10/2017': [
        {
          description: 'light rain',
          image: 'http://openweathermap.org/img/w/10d.png',
          temp: 15.18,
          time: '15:00',
          wind: {
            deg: 162,
            speed: 1.79
          }
        }
      ]
    })
  })

  it('reduceWeather should return an object with 6 days of data', () => {
    let res = reduceWeather(data)
    expect(Object.keys(res).length).toEqual(6)
  })
})
