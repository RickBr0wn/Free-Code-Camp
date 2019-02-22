import React, { Component } from 'react'
import Context from './Context'

export class ContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { sum: '0', display: '0', currentNumber: '', answer: '0' }
  }

  typeNumber = type => {
    switch (type) {
      case 'CE':
        this.clearDisplayAndSum()
        return console.log('display & sum cleared!')
      case 'C':
        this.clearDisplay()
        return console.log('display cleared!')
      case '/':
        this.clearDisplay()
        return this.addOperator('/')
      case 'X':
        this.clearDisplay()
        return this.addOperator('*')
      case '-':
        this.clearDisplay()
        return this.addOperator('-')
      case '+':
        this.clearDisplay()
        return this.addOperator('+')
      case '+/-':
        return console.log('+/-')
      case '.':
        return this.addOperator('.')
      case '=':
        this.setState({ display: this.state.answer })
        return console.log('=')
      default:
        const sum = this.state.sum + type
        let answer = eval(this.checkForDecimal(sum))
        this.setState({
          sum: this.checkForDecimal(sum),
          display: this.checkForDecimal(sum),
          currentNumber: this.checkForDecimal(sum),
          answer,
        })
        return
    }
  }

  containsADot = str =>
    str ? Array.from(str).filter(item => item === '.').length > 0 : null

  addOperator = opp => {
    if (opp === '.' && this.containsADot(this.state.sum)) {
      return null
    } else {
      this.setState({ sum: this.state.sum + opp })
    }
  }

  clearDisplay = () => {
    this.setState({ display: '', currentNumber: '' })
  }

  clearDisplayAndSum = () => {
    this.setState({ display: '0', sum: '', currentNumber: '' })
  }

  checkForDecimal(str) {
    if (typeof str !== 'string')
      throw new Error(
        'checkForDecimal() has been passed a parameter that is not a string'
      )
    const arr = str.split('')
    if (arr[0] === '0' && arr[1] !== '*')
      return arr.filter((item, index) => index).join('')
    return str
  }

  render() {
    console.log('THIS.STATE.SUM: ', this.state.sum)
    console.log('THIS.STATE.DISPLAY: ', this.state.display)
    console.log('THIS.STATE.ANSWER: ', this.state.answer)
    return (
      <div>
        <Context.Provider
          value={{
            sum: this.state.sum,
            display: this.state.display,
            currentNumber: this.state.currentNumber,
            typeNumber: this.typeNumber,
          }}>
          {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}

export default ContextProvider
