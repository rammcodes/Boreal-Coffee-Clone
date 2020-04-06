import React, { Component } from 'react'
import './Shopview.scss'

class Shopview extends Component {
  state = {}
  render() {
    return (
      <div className="shopview">
        <div className="route-info">
          <div className="container">
            <p className="route-list">
              <span className="route">Home</span>
              <span className="arrow-right">></span>
              <span className="route active">Shop</span>
            </p>
          </div>
        </div>
        <div className="msg-and-sort">
          <div className="container">
            <div className="msg">
              <h3 className="hl">
                Our dear coffee loving customer, perhaps you would be
              </h3>
              <h2 className="main">
                interested in some of our amazing coffees?
              </h2>
            </div>
            <div className="sort">
              <h4 className="txt">SORT PRODUCTS BY:</h4>
              <ul className="sort-by-list">
                <li className="item active">ALL</li>
                <li className="item">FILTER</li>
                <li className="item">ESPRESSO</li>
                <li className="item">MERCHANDISE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shopview
