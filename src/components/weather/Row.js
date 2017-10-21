/* @flow */

import React from 'react'

type Props = {
  time: string,
  temp: number,
  windSpeed: number,
  image: string,
  description: string
}

class Row extends React.PureComponent<Props> {
  static defaultProps = {
    time: '',
    temp: 0.0,
    windSpeed: 0.0,
    image: '',
    description: ''
  }

  render () {
    let { time, temp, windSpeed, image, description } = this.props
    return (
      <div>
        {`${time.toString()} - ${temp} - ${windSpeed} - `}{' '}
        <img src={image} alt={description} />
      </div>
    )
  }
}

export default Row
