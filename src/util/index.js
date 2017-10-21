import { format } from 'date-fns'

export const reduceWeather = (data: Object): Object => {
  return data.list.reduce((acc, w) => {
    const bucket = format(new Date(w.dt_txt), 'DD/MM/YYYY')
    if (!(bucket in acc)) {
      acc[bucket] = []
    }
    acc[bucket].push({
      time: format(new Date(w.dt_txt), 'HH:mm'),
      temp: w.main.temp,
      wind: w.wind,
      description: w.weather[0].description,
      image: `http://openweathermap.org/img/w/${w.weather[0].icon}.png`
    })
    return acc
  }, {})
}
