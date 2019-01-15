import React from 'react'
import InstrumentList from './Components/InstrumentList'
import Buttons from './Components/Buttons'
import './buttons.css'

export const App = () => {
  return <div>
      <div className="instrument-list">
        <InstrumentList />
      </div>
      <Buttons />
    </div>
}

export default App
