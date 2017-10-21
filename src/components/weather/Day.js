/* @flow */

import React from 'react'
import Row from './Row'

type Props = {
  day: string,
  data: Array<Object>
}

class Day extends React.PureComponent<Props> {
  static defaultProps = {
    day: '',
    data: []
  }

  render () {
    let { data, day } = this.props
    return (
      <div>
        <h1>{day}</h1>
        {data.map(w => <Row key={w.time} {...w} />)}
      </div>
    )
  }
}

export default Day
