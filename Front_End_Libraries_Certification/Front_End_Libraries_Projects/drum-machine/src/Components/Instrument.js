import React from 'react'

export const Instrument = props => {
  const { instrument, onPlay } = props
  const instrumentObj = instrument[Object.keys(instrument)]
  const { sound, name, id, letter } = instrumentObj

  return (
    <div key={id} className="instrument" onClick={() => onPlay(sound)}>
      <div>
        <kbd className="keyboard-letter">{letter}</kbd>
      </div>
      <div className="instrument-text">{name}</div>
    </div>
  )
}

export default Instrument