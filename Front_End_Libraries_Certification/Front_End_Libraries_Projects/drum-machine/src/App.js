import React from 'react'
import InstrumentList from './Components/InstrumentList'
import ContextProvider from './Store/contextProvider'
import Context from './Store/Context'

export const App = () => {
  return (
    <div>
      <ContextProvider>
        <Context.Consumer>
          {contextValue => (
            <>
              <div className="outer-container">
                <InstrumentList
                instruments={contextValue.instruments}
                power={contextValue.power}
                name={contextValue.name}
                onPlay={contextValue.onPlay}
                handleKeyDown={contextValue.handleKeyDown}
                handlePower={contextValue.handlePower}
              />
              </div>
            </>
          )}
        </Context.Consumer>
      </ContextProvider>
    </div>
  )
}

export default App
