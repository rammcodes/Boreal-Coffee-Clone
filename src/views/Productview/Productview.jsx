import React, { Component } from 'react'
import Routeinfo from '../../components/Routeinfo/Routeinfo'
import Productslist from '../../components/Productslist/Productslist'
import products from '../../data/products'
import './Productview.scss'

class Productview extends Component {
  state = {
    products,
    currProduct: null,
  }

  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(false)
    let product = products.find(
      (prd) => prd.id.toString() === this.props.match.params.prdId.toString()
    )
    this.setState({ currProduct: product })
  }

  limitProducts = (products) => {
    let limitedProducts = products.filter((prd, idx) => idx < 4)
    return limitedProducts
  }

  render() {
    const { products, currProduct } = this.state

    if (!currProduct) {
      return null
    }

    return (
      <div className="product-view">
        <Routeinfo />
        <div className="prd-and-details">
          <div className="container">
            <div className="prd">
              <div className="prd-img-cont">
                <img
                  src={currProduct.showCaseImg}
                  alt="product"
                  className="prd-img"
                />
              </div>
            </div>
            <div className="details">
              <div className="content">
                <div className="prd-weight">WEIGHT: 350G</div>
                <h2 className="prd-name">{currProduct.name}</h2>
                <h3 className="prd-price">
                  {currProduct.rate}{' '}
                  <span className="price-info">INCL VAT</span>
                </h3>
                <div className="overview">
                  <div className="title-and-info">
                    <h3 className="title">OVERVIEW</h3>
                    <div className="info">
                      <div className="icon-cont">
                        <img
                          src={require('../../assets/icons/handshake.png')}
                          className="icon"
                          alt="handshake"
                        />
                      </div>
                      <span className="txt">LEARN ABOUT DIRECT TRADE</span>
                    </div>
                  </div>
                  <div className="detail-cont">
                    <p className="detail">
                      We have been importing this Organic coffee direct from the
                      cooperative Taramesa in the region of Sidama with our
                      colleague from Roasters United for several years now. This
                      coffee is very delicate, fruity with a fresh finish. It is
                      very interesting also in light roast for V60, aeropress,
                      etc. It is more on the blue fruits side than on the
                      espresso roast. This coffee is organic certified by
                      bio-inspecta.
                    </p>
                  </div>
                </div>
                <div className="qty-checkout">
                  <div className="text txt-big">QUANTITY:</div>
                  <div className="text txt-sm">QTY:</div>
                  <div className="item-count">1</div>
                  <div className="inc-dec">
                    <div className="inc">
                      <img
                        src={require('../../assets/icons/plus.png')}
                        alt="plus"
                        className="icon"
                      />
                    </div>
                    <div className="dec">
                      <img
                        src={require('../../assets/icons/subtract.png')}
                        alt="subtract"
                        className="icon"
                      />
                    </div>
                  </div>
                  <button className="cart-add">
                    <span className="txt">ADD TO CART</span>
                    <img
                      src={require('../../assets/icons/right-arrow.png')}
                      alt="right-arrow"
                      className="icon"
                    />
                  </button>
                </div>
                <div className="ship-info">
                  Roasts & ships from our Geneva roastery on Tuesdays
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="msg">
          <h3 className="hl">
            Our dear coffee loving customer, perhaps you would be
          </h3>
          <h2 className="main">interested in some of our amazing coffees?</h2>
        </div>
        <Productslist products={this.limitProducts(products)} />
      </div>
    )
  }
}

export default Productview
