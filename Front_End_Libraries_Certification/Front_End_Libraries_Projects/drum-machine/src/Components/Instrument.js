import React from 'react'

export const Instrument = ({ instrument, onPlay, power }) => {
  const { sound, name, id, letter } = instrument[Object.keys(instrument)]
  return (
    <div
      key={id}
      className={`instrument ${power ? 'power-on' : null}`}
      onClick={power ? () => onPlay(sound, name) : null}
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
