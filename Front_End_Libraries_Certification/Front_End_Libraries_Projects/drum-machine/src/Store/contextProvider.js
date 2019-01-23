import React, { Component } from 'react'
import { instruments } from '../Components/instruments'
import Context from './Context'

export class contextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { instruments, power: false, name: null }
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

  handlePower = () => {
    this.setState({ ...this.state, power: !this.state.power })
  }

  render() {
    console.log('THIS.STATE: ', this.state)
    return (
      <div>
        <Context.Provider
          value={{
            instruments,
            power: this.power,
            name: this.name,
            onPlay: this.onPlay,
            handleKeyDown: this.handleKeyDown,
            handlePower: this.handlePower
          }}
        >
          {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}

export default contextProvider
