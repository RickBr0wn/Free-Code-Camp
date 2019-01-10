import React, { Component } from 'react'
import { END_POINT } from './constants'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: [],
      hasQuotes: false,
      backgroundColors: [
        '#A7BED3',
        '#C6E2E9',
        '#F1FFC4',
        '#FFCAAF',
        '#DAB894',
        '#DCEDB9',
        '#CBD081',
        '#918868',
        '#3A405A',
        '#F9DEC9',
        '#99B2DD',
        '#E9AFA3',
        '#685044',
        '#474A2C',
        '#636940',
        '#59A96A',
        '#B4E7CE',
        '#A0ECD0',
        '#94DDBC',
        '#714955',
        '#B4E7CE',
      ],
      fontColors: [
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#fff',
        '#fff',
        '#000',
        '#000',
        '#000',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#000',
        '#000',
        '#000',
        '#fff',
        '#000',
      ],
      currentQuote: null,
      currentAuthor: null,
      currentBackgroundColor: '#59A96A',
      currentFontColor: '#fff',
    }
  }

  fetchQuoteData = () => {
    fetch(END_POINT)
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
    console.log(quotesIndex)
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
      window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(currentQuote))
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
    return (
      <div>
        {hasQuotes && (
          <div
            style={{
              background: currentBackgroundColor,
              color: currentFontColor,
              height: '100vh',
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <div
              className="card"
              id="quote-box"
              style={{
                maxWidth: '60rem',
                padding: '5rem',
                borderRadius: '5px',
                marginBottom: '-3rem'
              }}>
              <div
                className="quote"
                id="text"
                style={{
                  fontSize: '4.8rem',
                  fontFamily: '"Bellefair", serif',
                }}>
                {currentQuote}
              </div>
              <div
                className="author"
                id="author"
                style={{
                  textAlign: 'right',
                  fontSize: '2rem',
                  marginTop: '0.5rem',
                }}>
                {currentAuthor}
              </div>
            </div>
            <div style={{ 
              width: '10rem', 
              color: currentFontColor, 
              display: 'flex', 
              justifyContent: 'space-around', 
              fontSize: '2rem' 
              }}>
              <div id="new-quote" onClick={() => this.generateNewQuote()}>
                <i class="fas fa-sync-alt" />
              </div>
              <div id="tweet-quote" onClick={() => this.tweetQuote(currentQuote,
      currentAuthor)}>
                <i class="fab fa-twitter" />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
