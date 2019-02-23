import React from 'react'
import { Store, StoreWrapper } from './Store'

export const App = () => {
  return (
    <StoreWrapper>
      <Store.Consumer>
        {({ timer, timeNow }) => {
          const newTime = new Date(timeNow)
          return console.log(newTime.getSeconds())
        }}
      </Store.Consumer>
    </StoreWrapper>
  )
}
