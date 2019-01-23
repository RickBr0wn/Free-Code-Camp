import React from 'react'
import InstrumentList from './Components/InstrumentList'
import ContextProvider from './Store/contextProvider'

export const App = () => {
  return (
    <div>
      <ContextProvider>
        <div className="outer-container">
          <InstrumentList />
        </div>
      </ContextProvider>
    </div>
  )
}

export default App
