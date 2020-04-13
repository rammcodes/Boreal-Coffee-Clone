import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Productslist.scss'

class Productslist extends Component {
  state = {}
  render() {
    const { products } = this.props
    return (
      <div className="products-list">
        <div className="container">
          <div className="products">
            {products.map((prd, idx) => (
              <Link
                to={`/shop/product/${prd.id}`}
                key={idx}
                className="product"
              >
                <div className="prd-img-cont">
                  <img src={prd.img} alt="product" className="prd-img" />
                </div>
                <h4 className="prd-name">{prd.name}</h4>
                <h4 className="prd-price">{prd.rate}</h4>
                <p className="prd-cat">{prd.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Productslist
