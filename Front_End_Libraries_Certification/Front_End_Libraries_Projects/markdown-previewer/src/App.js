/**
|--------------------------------------------------
| TODO: 
|   Implement a feature to allow markdown to be converted to HTML
|   Using:  <p>{marked(markdown)}</p>
|--------------------------------------------------
*/

import React, { Component } from 'react'
import marked from 'marked'
import { initialvalue } from './initalValue'

export class App extends Component {
  constructor() {
    super()
    this.state = { markdown: initialvalue }
  }

  onChange = markdown => this.setState({ markdown })

  render() {
    const { markdown } = this.state

    const styles = {
      mainContainer: { padding: '3rem', margin: '0 auto', textAlign: 'center' },
      windowsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '85vh',
        marginTop: '3rem',
        overflow: 'hidden',
      },
      textArea: {
        width: '49%',
        height: '100%',
        padding: '2rem',
      },
      markdownArea: {
        width: '49%',
        height: '100%',
        textAlign: 'left',
        background: '#fff',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        padding: '2rem',
        overflow: 'hidden',
      },
    }

    console.log(marked)
    return (
      <div style={styles.mainContainer}>
        <h1>Markdown Previewer</h1>
        <div style={styles.windowsContainer}>
          <textarea
            style={styles.textArea}
            value={this.state.markdown}
            onChange={event => this.onChange(event.target.value)}
          />
          <div
            style={styles.markdownArea}
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    )
  }
}

export default App
