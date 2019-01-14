import React, { Component } from 'react'
import Instrument from './SoundComponents/Instrument'
import { instruments } from './SoundComponents/sounds/instruments'

// Q:81 W:87 E:69 R:82 T:84 Y:89 U:85 I:73 O:79

export class InstrumentList extends Component {
  constructor() {
    super()
    this.state = {
      instruments
    }
  }

  render() {
    return this.state.instruments.map((instrument, index) => (
      <div key={index}>
        <Instrument instrument={instrument} />
      </div>
    ))
  }
}

export default InstrumentList
