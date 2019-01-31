import React from 'react'

const Calculator = ({ sum, display, typeNumber, currentNumber }) => {
  return (
    <div className="container calculator">
      <div className="calc-header">CASIO</div>
      <div className="display-window" id="displayWindow">
        <p>{sum ? sum : '0'}</p>
        {display}
      </div>
      <div className="button-container">
        <button onClick={() => typeNumber('CE')} className="button button-red">
          CE
        </button>
        <button onClick={() => typeNumber('C')} className="button button-red">
          C
        </button>
        <button onClick={() => typeNumber('DEL')} className="button">
          DEL
        </button>
        <button onClick={() => typeNumber('/')} className="button">
          /
        </button>
        <button onClick={() => typeNumber('7')} className="button">
          7
        </button>
        <button onClick={() => typeNumber('8')} className="button">
          8
        </button>
        <button onClick={() => typeNumber('9')} className="button">
          9
        </button>
        <button onClick={() => typeNumber('X')} className="button">
          X
        </button>
        <button onClick={() => typeNumber('4')} className="button">
          4
        </button>
        <button onClick={() => typeNumber('5')} className="button">
          5
        </button>
        <button onClick={() => typeNumber('6')} className="button">
          6
        </button>
        <button onClick={() => typeNumber('-')} className="button">
          -
        </button>
        <button onClick={() => typeNumber('1')} className="button">
          1
        </button>
        <button onClick={() => typeNumber('2')} className="button">
          2
        </button>
        <button onClick={() => typeNumber('3')} className="button">
          3
        </button>
        <button onClick={() => typeNumber('+')} className="button">
          +
        </button>
        <button onClick={() => typeNumber('+/-')} className="button">
          +/-
        </button>
        <button onClick={() => typeNumber('0')} className="button">
          0
        </button>
        <button onClick={() => typeNumber('.')} className="button">
          .
        </button>
        <button onClick={() => typeNumber('=')} className="button">
          =
        </button>
      </div>
    </div>
  )
}

export default Calculator
