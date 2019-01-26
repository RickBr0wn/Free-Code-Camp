import React from 'react'

export const LCD = ({ name, power }) => {
  return <div className={`lcd ${power ? 'lcd-on' : null}`}>{name}</div>
}

export default LCD
