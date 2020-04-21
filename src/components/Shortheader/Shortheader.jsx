import React, { Component } from 'react'
import './Shortheader.scss'

class Shortheader extends Component {
  state = {}
  render() {
    return (
      <header className="short-header">
        <div className="content">
          <h2 className="sub-title">Our very first shop and flagship</h2>
          <h2 className="title">Boréal, Rue du Stand</h2>
          <p className="plane">
            Our café is a mix of bold colours and smooth music
          </p>
        </div>
      </header>
    )
  }
}

export default Shortheader
