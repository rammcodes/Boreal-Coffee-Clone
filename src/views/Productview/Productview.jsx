import React, { Component } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Routeinfo from '../../components/Routeinfo/Routeinfo'
import Productslist from '../../components/Productslist/Productslist'
import products from '../../data/products'
import './Productview.scss'

class Productview extends Component {
  state = {
    products,
    currProduct: null,
    showCaseProduct: false,
    cart: {
      included: false,
      amount: 0,
    },
  }

  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(false)
    let product = products.find(
      (prd) => prd.id.toString() === this.props.match.params.prdId.toString()
    )

    let cart
    if (window.localStorage.getItem(product.id)) {
      let itemQty = window.localStorage.getItem(product.id)
      cart = {
        included: true,
        amount: parseInt(itemQty),
      }
    } else {
      cart = {
        included: false,
        amount: 0,
      }
    }
    this.setState({ currProduct: product, cart })
  }

  limitProducts = (products) => {
    let limitedProducts = products.filter((prd, idx) => idx < 4)
    return limitedProducts
  }

  onIncOrDecClick = (val) => {
    const { currProduct } = this.state
    if (val === 'inc') {
      if (window.localStorage.getItem(currProduct.id)) {
        let itemQty = window.localStorage.getItem(currProduct.id)
        itemQty = parseInt(itemQty) + 1
        let cartState = {
          included: true,
          amount: itemQty,
        }
        window.localStorage.setItem(currProduct.id, itemQty.toString())
        this.setState({
          cart: cartState,
        })
      } else {
        window.localStorage.setItem(currProduct.id, '1')
        let cartState = {
          included: true,
          amount: 1,
        }
        this.setState({
          cart: cartState,
        })
      }
    } else {
      if (
        window.localStorage.getItem(currProduct.id) &&
        parseInt(window.localStorage.getItem(currProduct.id)) > 0
      ) {
        let itemQty = window.localStorage.getItem(currProduct.id)
        itemQty = parseInt(itemQty) - 1
        let cartState
        if (itemQty < 1) {
          cartState = {
            included: false,
            amount: 0,
          }
          window.localStorage.removeItem(currProduct.id)
        } else {
          cartState = {
            included: true,
            amount: itemQty,
          }
        }
        window.localStorage.setItem(currProduct.id, itemQty.toString())
        this.setState({ cart: cartState })
      }
    }
  }

  toggleProductShowcase = (val) => {
    this.setState({ showCaseProduct: val })
  }

  render() {
    const { products, currProduct, showCaseProduct, cart } = this.state

    if (!currProduct) {
      return null
    }

    return (
      <div className="product-view">
        {showCaseProduct ? (
          <div className="prd-showcase">
            <OutsideClickHandler
              onOutsideClick={() => this.toggleProductShowcase(false)}
            >
              <div className="content">
                <div className="img-cont">
                  <img
                    src={require(`../../assets/img/ProductImages/${currProduct.showCaseImg}`)}
                    alt="product"
                    className="img"
                  />
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        ) : null}
        <Routeinfo />
        <div className="prd-and-details">
          <div className="container">
            <div className="prd">
              <div
                onClick={() => this.toggleProductShowcase(true)}
                className="prd-img-cont"
              >
                <img
                  src={require(`../../assets/img/ProductImages/${currProduct.showCaseImg}`)}
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
                  <div className="item-count">{cart.amount}</div>
                  <div className="inc-dec">
                    <div
                      onClick={() => this.onIncOrDecClick('inc')}
                      className="inc"
                    >
                      <img
                        src={require('../../assets/icons/plus.png')}
                        alt="plus"
                        className="icon"
                      />
                    </div>
                    <div
                      onClick={() => this.onIncOrDecClick('dec')}
                      className="dec"
                    >
                      <img
                        src={require('../../assets/icons/subtract.png')}
                        alt="subtract"
                        className="icon"
                      />
                    </div>
                  </div>
                  <button
                    className={`cart-add ${
                      cart.included ? 'cart-add-succ' : ''
                    }`}
                  >
                    <span className="txt">
                      {cart.included ? 'ADDED TO CART' : 'ADD TO CART'}
                    </span>
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
