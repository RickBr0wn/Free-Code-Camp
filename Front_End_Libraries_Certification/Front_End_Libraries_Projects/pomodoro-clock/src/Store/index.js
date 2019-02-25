import React, { Component, createContext } from 'react'

export const Store = createContext()

export class StoreWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = { time: 0, running: false, output: '0:00:00:00' }
  }

  startPause = () => {
    if (this.state.running === false) {
      this.setState(() => ({ running: true }), this.increment())
    } else if (this.state.running === true) {
      this.setState({ running: false })
    }
  }

  increment = () => {
    if (this.state.running === true) {
      setTimeout(() => {
        const time = this.state.time + 1
        const tenths = this.state.time % 10
        const seconds = Math.floor(this.state.time / 10)
        const mins = Math.floor(this.state.time / 10 / 60)
        const hours = Math.floor(this.state.time / 10 / 60 / 60)
        this.setState(
          () => ({ time, output: `${hours}:${mins}:${seconds}:${tenths}` }),
          this.increment()
        )
      }, 100)
    } else {
      this.setState({ output: <h1>fail!!!! 🤓</h1> })
    }
  }

  reset = () => {
    this.setState({ running: false, time: 0, output: '0:00:00:00' })
  }

  render() {
    return (
      <Store.Provider
        value={{
          time: this.state.time,
          running: this.state.running,
          startPause: this.startPause,
          increment: this.increment,
          reset: this.reset,
          output: this.state.output
        }}>
        {this.props.children}
      </Store.Provider>
    )
  }
}
