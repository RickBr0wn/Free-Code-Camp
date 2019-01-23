import React, { Component } from 'react'
import Context from './Context'

export class ContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sum: '',
    }
  }

  typeNumber = num => {
    let sum = this.state.sum + num
    this.setState({ sum })
  }

  render() {
    console.log('THIS.STATE: ', this.state)
    return (
      <div>
        <Context.Provider
          value={{ sum: this.state.sum, typeNumber: this.typeNumber }}>
          {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}

export default ContextProvider
