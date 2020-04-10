import React, { Component } from 'react'
import './Productview.scss'
import Routeinfo from '../../components/Routeinfo/Routeinfo'

class Productview extends Component {
  state = {}

  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(false)
  }

  render() {
    return (
      <div className="product-view">
        <Routeinfo />
        <div className="prd-and-details">
          <div className="container">
            <div className="prd">
              <div className="prd-img-cont">
                <img
                  src="http://www.borealcoffee.ch/images/thumbnails/900/1212/detailed/1/tarmesaLRbio.jpg"
                  alt="product"
                  className="prd-img"
                />
              </div>
            </div>
            <div className="details">
              <div className="content">
                <div className="prd-weight">WEIGHT: 350G</div>
                <h2 className="prd-name">TARAMESA BIO, ETHIOPIA</h2>
                <h3 className="prd-price">
                  16.50 CHF <span className="price-info">INCL VAT</span>
                </h3>
                <div className="overview">
                  <div className="title-and-info">
                    <h3 className="title">OVERVIEW</h3>
                    <div className="info">
                      <div className="icon-cont">
                        <img
                          src="https://img.icons8.com/color/48/000000/handshake.png"
                          className="icon"
                          alt="handshake"
                        />
                      </div>
                      <span className="txt">LEARN ABOUT DIRECT TRADE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Productview
