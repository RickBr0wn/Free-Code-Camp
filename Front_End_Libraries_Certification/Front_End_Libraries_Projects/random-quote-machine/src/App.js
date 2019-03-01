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
      currentQuote: null,
      currentAuthor: null,
      currentBackgroundColor: '#59A96A',
      currentFontColor: '#fff',
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
          currentQuote: parsedJSON.quotes[quoteIndex].quote,
          currentAuthor: parsedJSON.quotes[quoteIndex].author,
          currentBackgroundColor: backgroundColors[colorIndex],
          currentFontColor: fontColors[colorIndex],
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
      currentQuote: quotes[quotesIndex].quote,
      currentAuthor: quotes[quotesIndex].author,
      currentBackgroundColor: backgroundColors[colorsIndex],
      currentFontColor: fontColors[colorsIndex],
    })
  }

  tweetQuote = currentQuote => {
    const url = 'https://github.com/RickBr0wn'
    window.open(
      'http://twitter.com/share?url=' +
        encodeURIComponent(url) +
        '&text=' +
        encodeURIComponent(currentQuote)
    )
  }

  componentWillMount() {
    this.fetchQuoteData()
  }

  render() {
    const {
      hasQuotes,
      currentQuote,
      currentAuthor,
      currentBackgroundColor,
      currentFontColor,
    } = this.state

    const stylesObj = {
      container: {
        background: currentBackgroundColor,
        color: currentFontColor,
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
        color: currentFontColor,
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
                {currentQuote}
              </div>
              <div id="author" style={stylesObj.quoteAuthor}>
                {currentAuthor}
              </div>
            </div>
            <div style={stylesObj.buttonContainer}>
              <div id="new-quote" onClick={() => this.generateNewQuote()}>
                <i className="fas fa-sync-alt" />
              </div>
              <div
                id="tweet-quote"
                onClick={() => this.tweetQuote(currentQuote, currentAuthor)}>
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
