import React, { Component } from 'react'
import { URL, backgroundColors, fontColors } from './constants'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: [],
      hasQuotes: false,
      backgroundColors,
      fontColors,
      activeQuote: null,
      activeAuthor: null,
      activeBackgroundColor: '#59A96A',
      activeFontColor: '#fff',
    }
  }

  fetchQuoteData = () => {
    fetch(URL)
      .then(response => response.json())
      .then(parsedJSON => {
        const { backgroundColors, fontColors } = this.state
        const quoteIndex = this.randomIndex(parsedJSON.quotes.length)
        const colorIndex = this.randomIndex(backgroundColors.length)
        this.setState({
          quotes: parsedJSON.quotes,
          hasQuotes: true,
          activeQuote: parsedJSON.quotes[quoteIndex].quote,
          activeAuthor: parsedJSON.quotes[quoteIndex].author,
          activeBackgroundColor: backgroundColors[colorIndex],
          activeFontColor: fontColors[colorIndex],
        })
      })
      .catch(error => console.log(error))
  }

  randomIndex = num => Math.floor(Math.random() * num)

  generateNewQuote = () => {
    const { quotes, backgroundColors, fontColors } = this.state
    const quotesIndex = this.randomIndex(quotes.length)
    const colorsIndex = this.randomIndex(backgroundColors.length)
    this.setState({
      ...this.state,
      activeQuote: quotes[quotesIndex].quote,
      activeAuthor: quotes[quotesIndex].author,
      activeBackgroundColor: backgroundColors[colorsIndex],
      activeFontColor: fontColors[colorsIndex],
    })
  }

  tweetQuote = activeQuote => {
    const url = 'https://github.com/RickBr0wn'
    window.open(
      'http://twitter.com/share?url=' +
        encodeURIComponent(url) +
        '&text=' +
        encodeURIComponent(activeQuote)
    )
  }

  componentWillMount() {
    this.fetchQuoteData()
  }

  render() {
    const {
      hasQuotes,
      activeQuote,
      activeAuthor,
      activeBackgroundColor,
      activeFontColor,
    } = this.state

    const stylesObj = {
      container: {
        background: activeBackgroundColor,
        color: activeFontColor,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      quoteBox: {
        maxWidth: '60rem',
        padding: '5rem',
        borderRadius: '5px',
        marginBottom: '-3rem',
      },
      quoteText: {
        fontSize: '4.8rem',
        fontFamily: '"Bellefair", serif',
      },
      quoteAuthor: {
        textAlign: 'right',
        fontSize: '2rem',
        marginTop: '0.5rem',
      },
      buttonContainer: {
        width: '10rem',
        color: activeFontColor,
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '2rem',
      },
    }

    return (
      <div id="quote-box">
        {hasQuotes && (
          <div style={stylesObj.container}>
            <div id="quote-box" style={stylesObj.quoteBox}>
              <div id="text" style={stylesObj.quoteText}>
                {activeQuote}
              </div>
              <div id="author" style={stylesObj.quoteAuthor}>
                {activeAuthor}
              </div>
            </div>
            <div style={stylesObj.buttonContainer}>
              <div id="new-quote" onClick={() => this.generateNewQuote()}>
                <i className="fas fa-sync-alt" />
              </div>
              <div
                id="tweet-quote"
                onClick={() => this.tweetQuote(activeQuote, activeAuthor)}>
                <i className="fab fa-twitter" />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
