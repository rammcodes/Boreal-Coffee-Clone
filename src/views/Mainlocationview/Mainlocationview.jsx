import React, { Component } from 'react'
import './Mainlocationview.scss'
import Sublocation from '../../components/Sublocation/Sublocation'

class Mainlocationview extends Component {
  state = {}
  render() {
    return (
      <div className="mainlocationview">
        <header className="mlv-header">
          <div className="container">
            <div className="map-cont">
              <img
                src={require('../../assets/img/geneva-map.png')}
                alt="map"
                className="map"
              />
            </div>
            <h3 className="sub-txt">choose between our locations</h3>
            <div className="loc-opts">
              <h1 className="txt-bg active">GENEVA</h1>
              <h4 className="txt-sm">OR</h4>
              <h1 className="txt-bg">ZURICH</h1>
            </div>
            <div className="hdr-bottom">
              <div className="img-cont">
                <img
                  src={require('../../assets/img/scroll-indicator-mlv.png')}
                  alt="scroll"
                  className="img"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="sub-loc-colln">
          <Sublocation />
          <Sublocation inverted={true} />
          <Sublocation />
        </section>
      </div>
    )
  }
}

export default Mainlocationview
