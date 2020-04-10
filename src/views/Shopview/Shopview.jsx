import React, { Component } from 'react'
import products from '../../data/products'
import './Shopview.scss'
import Routeinfo from '../../components/Routeinfo/Routeinfo'

class Shopview extends Component {
  state = {
    products,
  }

  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(false)
  }

  render() {
    const { products } = this.state
    return (
      <div className="shopview">
        <Routeinfo />
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
        <div className="products-list">
          <div className="container">
            <div className="products">
              {products.map((prd, idx) => (
                <div key={idx} className="product">
                  <div className="prd-img-cont">
                    <img src={prd.img} alt="product" className="prd-img" />
                  </div>
                  <h4 className="prd-name">{prd.name}</h4>
                  <h4 className="prd-price">{prd.rate}</h4>
                  <p className="prd-cat">{prd.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sub-and-discover">
          <div className="sub">
            <h4 className="title">BOREAL NEWSLETTER</h4>
            <h2 className="msg">
              Enter your email address to receive our occasional updates and
              e-vouchers
            </h2>
            <form action="" className="form">
              <input
                placeholder="name@email.com"
                type="text"
                className="email-input"
              />
              <button className="submit" type="submit">
                <span className="text">SUBSCRIBE</span>
                <img
                  src={require('../../assets/icons/right-arrow.png')}
                  alt="right-arrow"
                  className="right-arrow"
                />
              </button>
            </form>
          </div>
          <div className="discover">
            <div className="container">
              <h4 className="que">You prefer to buy your coffee in person?</h4>
              <h2 className="msg">just visit one of our shops</h2>
              <button className="discover">
                <span className="text">Discover Boréal</span>
                <img
                  src={require('../../assets/icons/right-arrow.png')}
                  alt="right-arrow"
                  className="right-arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shopview
