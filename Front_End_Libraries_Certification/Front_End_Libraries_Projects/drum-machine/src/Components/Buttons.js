import React from 'react'

const Buttons = ({ power, handlePower }) => {
  return (
    <div className="button-container">
      <div className="">
        <i
          className={`fas fa-power-off icon ${
            power ? 'letter-power-on' : null
          }`}
        />
        <div className="power-button" onClick={() => handlePower()} />
        <div className={`power-button-dot ${power ? 'dot-power' : null}`} />
      </div>
    </div>
  )
}

export default Buttons
