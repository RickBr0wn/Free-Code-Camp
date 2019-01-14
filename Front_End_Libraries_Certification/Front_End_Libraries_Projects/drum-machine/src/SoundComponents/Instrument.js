import React from 'react'

export const Instrument = props => {
  const onPlay = sound => {
    const onSound = new Audio(sound)
    onSound.play()
  }

  const { instrument } = props
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
