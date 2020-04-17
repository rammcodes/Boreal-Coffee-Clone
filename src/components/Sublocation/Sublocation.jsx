import React, { Component } from 'react'
import './Sublocation.scss'

class Sublocation extends Component {
  state = {}
  render() {
    const { inverted } = this.props
    return (
      <div className="sub-location">
        {inverted ? null : (
          <div className="img-cont">
            <img
              src="http://www.borealcoffee.ch/images/thumbnails/800/532/promo/1/1-13_0911-1717_NatashaCarrion.jpg"
              alt="location"
              className="img"
            />
          </div>
        )}

        <div className="details">
          <div className="cont">
            <h4 className="txt-sm">THE FLAGSHIP</h4>
            <h2 className="txt-bg">RUE DU STAND</h2>
            <hr className="org-line" />
            <p className="para">
              The Boréal Coffee Rue du Stand is our first coffee shop and our
              flagship. Our café is a mix of bold colours and smooth music so
              you can relax with colleagues or friends while drinking one of our
              many beverages and pastries on offer.
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

        {inverted ? (
          <div className="img-cont">
            <img
              src="http://www.borealcoffee.ch/images/thumbnails/800/532/promo/1/1-13_0911-1717_NatashaCarrion.jpg"
              alt="location"
              className="img"
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default Sublocation
