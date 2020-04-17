import React, { Component } from 'react'
import './Mainlocationview.scss'

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
          <div className="sub-location">
            <div className="img-cont">
              <img
                src="http://www.borealcoffee.ch/images/thumbnails/800/532/promo/1/1-13_0911-1717_NatashaCarrion.jpg"
                alt="location"
                className="img"
              />
            </div>
            <div className="details">
              <div className="cont">
                <h4 className="txt-sm">THE FLAGSHIP</h4>
                <h2 className="txt-bg">RUE DU STAND</h2>
                <hr className="org-line" />
                <p className="para">
                  The Boréal Coffee Rue du Stand is our first coffee shop and
                  our flagship. Our café is a mix of bold colours and smooth
                  music so you can relax with colleagues or friends while
                  drinking one of our many beverages and pastries on offer.
                </p>
                <button className="nav">
                  <span className="txt">DISCOVER RUE DU STAND</span>
                  <img
                    src={require('../../assets/icons/right-arrow.png')}
                    alt="arrow"
                    className="icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Mainlocationview
