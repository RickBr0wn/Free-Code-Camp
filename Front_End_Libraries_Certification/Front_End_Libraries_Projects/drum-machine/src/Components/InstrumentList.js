import React, { Component } from 'react'
import Instrument from './Instrument'
import { instruments } from './instruments'
import PowerButton from './PowerButton'
import LCD from './LCD'
import '../buttons.css'

export class InstrumentList extends Component {
  constructor() {
    super()
    this.state = { instruments, power: false, name: null }
  }

  onPlay = sound => {
    const onSound = new Audio(sound)
    onSound.play()
  }
  
  handleKeyDown = event => {
    console.log('pressedInstrument')
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

  handlePower = () => {
    this.setState({ ...this.state, power: !this.state.power })
  }

  render() {
    const power = this.state.power
    return (
      <div>
        <div className="instrument-list">
          {this.state.instruments.map((instrument, index) => (
            <div key={index}>
              <Instrument
                instrument={instrument}
                onPlay={this.onPlay}
                power={power}
              />
            </div>
          ))}
        </div>
        <div><LCD /></div>
        <div>
          <PowerButton power={power} handlePower={this.handlePower} />
        </div>
      </div>
    )
  }
}

export default InstrumentList
