import React, { Component } from 'react'
import Instrument from './Instrument'
import { instruments } from './instruments'


// Q:81 W:87 E:69 R:82 T:84 Y:89 U:85 I:73 O:79

export class InstrumentList extends Component {
  constructor() {
    super()
    this.state = { instruments }
  }

  onPlay = sound => {
    const onSound = new Audio(sound)
    onSound.play()
  }

  handleKeyDown = event => {
    let pressedInstrument = null

    this.state.instruments.map(instrument => {
      const identifier = Object.keys(instrument)
      return instrument[identifier].keyCode === event.keyCode
        ? (pressedInstrument = instrument[identifier].sound)
        : null
    })

    this.onPlay(pressedInstrument)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  render() {
    return this.state.instruments.map((instrument, index) => (
      <div key={index}>
        <Instrument instrument={instrument} onPlay={this.onPlay} />
        
      </div>
    ))
  }
}

export default InstrumentList
