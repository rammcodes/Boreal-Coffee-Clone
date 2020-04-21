import React, { Component } from 'react'
import './Shortheader.scss'

class Shortheader extends Component {
  state = {}
  render() {
    const { mainHead, subHead, text, img } = this.props
    return (
      <header
        className="short-header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${require(`../../assets/img/${img}`)})`,
        }}
      >
        <div className="content">
          <h2 className="sub-title">{subHead}</h2>
          <h2 className="title">{mainHead}</h2>
          <p className="plane">{text} </p>
        </div>
      </header>
    )
  }
}

export default Shortheader
