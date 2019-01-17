import React from 'react'

export const Instrument = props => {
  const { instrument, onPlay, power } = props
  const instrumentObj = instrument[Object.keys(instrument)]
  const { sound, name, id, letter } = instrumentObj
  return (
    <div
      key={id}
      className={`instrument ${power ? 'power-on' : null}`}
      onClick={power ? () => onPlay(sound) : null}
    >
      <div>
        <kbd className={`keyboard-letter ${power ? 'letter-power-on' : null}`}>
          {letter}
        </kbd>
      </div>
      <div className="instrument-text">{name}</div>
    </div>
  )
}

export default Instrument
