import React from 'react'
import { Store, StoreWrapper } from './Store'
import { TimeEntry } from './components'

export const App = () => {
  return (
    <StoreWrapper>
      <Store.Consumer>
        {({
          time,
          running,
          startPause,
          increment,
          output,
          reset,
          textBoxChange,
          timeRequired
        }) => {
          return (
            <div>
              <TimeEntry
                textBoxChange={textBoxChange}
                timeRequired={timeRequired}
              />
              <div>{output}</div>
              <div>
                <button
                  onClick={startPause}
                  style={
                    running
                      ? { background: 'red', color: '#fff' }
                      : { background: 'blue', color: '#fff' }
                  }>
                  {running ? 'pause' : 'start'}
                </button>
                <button onClick={reset}>reset</button>
              </div>
            </div>
          )
        }}
      </Store.Consumer>
    </StoreWrapper>
  )
}
