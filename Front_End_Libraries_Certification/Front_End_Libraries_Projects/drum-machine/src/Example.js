import React, { Component } from 'react'

export class Example extends React.Component {
  constructor() {
    super();
    this.words = {};
  }

  logClick(i) {
    console.log("user clicked on", this.words[i]);
  }

  render() {
    const wordsArr = "this is an example sentence".split(" ");
    return (
      <div className="row letter-container">
        <div className="col-sm-12">
          {this.generateWord(wordsArr)}
        </div>
      </div>
    )
  }

  generateWord(wordsArr) {
    return wordsArr.map((word) => {
      return (
        <div>
          <span
            key={word}
            ref={x => { this.words[word] = x; }}
            onClick={this.logClick.bind(this, word)}
          >
            {word}
          </span>
        </div>
      );
    })
  }
}

export default Example
