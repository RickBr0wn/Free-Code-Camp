import React, { Component } from 'react'
import Instrument from './Instrument'
import { instruments } from './instruments'
import PowerButton from './PowerButton'
import LCD from './LCD'
import '../buttons.css'

export const InstrumentList = ({
  instruments,
  power,
  name,
  onPlay,
  handleKeyDown,
  handlePower
}) => {
  return (
    <div>
      <div className="instrument-list">
        {instruments.map((instrument, index) => (
          <div key={index}>
            <Instrument
              instrument={instrument}
              onPlay={onPlay}
              power={power}
            />
          </div>
        ))}
      </div>
      <div>
        <LCD name={name} power={power} />
      </div>
      <div>
        <PowerButton power={power} handlePower={handlePower} />
      </div>
    </div>
  )
}

export default InstrumentList
