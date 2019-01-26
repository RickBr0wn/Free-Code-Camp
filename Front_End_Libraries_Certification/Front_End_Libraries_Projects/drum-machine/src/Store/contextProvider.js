import React, { Component } from 'react'
import { instruments } from '../Components/instruments'
import Context from './Context'

export class contextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { instruments, power: false, name: '' }
  }

  onPlay = (sound, name) => {
    const onSound = new Audio(sound)
    this.setState({ name })
    onSound.play()
  }

  handleKeyDown = event => {
    let instrumentObj = null
    this.state.instruments.map(instrument => {
      const identifier = Object.keys(instrument)
      return instrument[identifier].keyCode === event.keyCode
        ? (instrumentObj = instrument[identifier])
        : null
    })
    this.onPlay(instrumentObj.sound, instrumentObj.name)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  handlePower = () => {
    this.setState({ ...this.state, power: !this.state.power, name: '' })
  }

  render() {
    console.log('THIS.STATE: ', this.state)
    return (
      <div>
        <Context.Provider
          value={{
            instruments,
            power: this.state.power,
            name: this.state.name,
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
