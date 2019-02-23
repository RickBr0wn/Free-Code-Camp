import React, { Component, createContext } from 'react'

export const Store = createContext()

export class StoreWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = { timer: 9, timeNow: Date.now() }
  }

  render() {
    return (
      <Store.Provider
        value={{
          timer: this.state.timer,
          timeNow: this.state.timeNow
        }}>
        {this.props.children}
      </Store.Provider>
    )
  }
}
