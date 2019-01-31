import React, { Component } from 'react'
import Calculator from './Components/Calculator'
import ContextProvider from './Store/ContextProvider'
import Context from './Store/Context'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ContextProvider>
          <Context.Consumer>
            {contextValue => {
              return (
                <Calculator
                  display={contextValue.display}
                  sum={contextValue.sum}
                  currentNumber={contextValue.currentNumber}
                  typeNumber={contextValue.typeNumber}
                />
              )
            }}
          </Context.Consumer>
        </ContextProvider>
      </div>
    )
  }
}

export default App
