import React from 'react'
import { Store, StoreWrapper } from './Store'

export const App = () => {
  return (
    <StoreWrapper>
      <Store.Consumer>
        {({ time, running, startPause, increment, output, reset }) => {
          return (
            <div>
              <div>{output}</div>
              <div>
                <button onClick={startPause}>
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
