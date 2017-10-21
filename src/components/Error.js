/* @flow */
import React from 'react'

const Error = (message: any) => {
  return (
    <h1 style={{ textAlign: 'center', color: 'red' }}>{`Oops: ${message}`}</h1>
  )
}

export default Error
