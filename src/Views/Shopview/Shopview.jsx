import React, { Component } from 'react'
import products from '../../data/products'
import './Shopview.scss'

class Shopview extends Component {
  state = {
    products,
  }
  render() {
    const { products } = this.state
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
        <div className="products-list">
          <div className="container">
            <div className="products">
              {products.map((prd) => (
                <div className="product">
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
      </div>
    )
  }
}

export default Shopview
