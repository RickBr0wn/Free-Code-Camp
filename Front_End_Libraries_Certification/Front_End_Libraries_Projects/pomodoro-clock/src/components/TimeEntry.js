import React from 'react'

const TimeEntry = ({ textBoxChange }) => {
  return (
    <div>
      <input type='text' onChange={textBoxChange} />
      <button>Set Timer</button>
    </div>
  )
}

export default TimeEntry
