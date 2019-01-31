import React, { Component } from 'react'
import Context from './Context'

export class ContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { sum: '0', display: '0' }
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
        return this.addOperator('X')
      case '-':
        this.clearDisplay()
        return this.addOperator('-')
      case '+':
        this.clearDisplay()
        return this.addOperator('+')
      case '+/-':
        return console.log('+/-')
      case '.':
        return console.log('.')
      case '=':
        return console.log('=')
      default:
        let sum = this.state.sum + type
        this.setState({
          sum: this.checkForDecimal(sum),
          display: this.checkForDecimal(sum),
        })
        return
    }
  }

  addOperator = opp => this.setState({ sum: this.state.sum + opp })

  clearDisplay = () => {
    this.setState({ display: '' })
  }

  clearDisplayAndSum = () => {
    this.setState({ display: '0', sum: '' })
  }

  checkForDecimal(str) {
    if (typeof str !== 'string')
      throw new Error('checkForDecimal function has been passed a non-string')
    const arr = str.split('')
    if (arr[0] === '0' && arr[1] !== '*')
      return arr.filter((item, index) => index).join('')
    return str
  }

  render() {
    console.log('THIS.SUM: ', this.state.sum)
    console.log('THIS.DISPLAY: ', this.state.display)
    return (
      <div>
        <Context.Provider
          value={{
            sum: this.state.sum,
            display: this.state.display,
            typeNumber: this.typeNumber,
          }}>
          {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}

export default ContextProvider
