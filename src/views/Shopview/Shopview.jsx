import React, { Component } from 'react'
import products from '../../data/products'
import Routeinfo from '../../components/Routeinfo/Routeinfo'
import Productslist from '../../components/Productslist/Productslist'
import './Shopview.scss'

class Shopview extends Component {
  state = {
    products: null,
    selectedCat: 'all',
  }

  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(false)
    this.setCat()
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedCat } = this.state
    if (selectedCat !== prevState.selectedCat) {
      this.setCat()
    }
  }

  setCat = () => {
    const { selectedCat } = this.state
    if (selectedCat === 'all') {
      this.setState({ products })
    } else {
      let filteredProducts = products.filter(
        (prd) => prd.category === selectedCat
      )
      this.setState({ products: filteredProducts })
    }
  }

  onChangeCat = (catName) => {
    this.setState({ selectedCat: catName })
  }

  render() {
    const { products, selectedCat } = this.state

    if (!products) return null

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
                <li
                  className={`item ${selectedCat === 'all' ? ' active' : ''}`}
                  onClick={() => this.onChangeCat('all')}
                >
                  ALL
                </li>
                <li
                  className={`item ${
                    selectedCat === 'filter' ? ' active' : ''
                  }`}
                  onClick={() => this.onChangeCat('filter')}
                >
                  FILTER
                </li>
                <li
                  className={`item ${
                    selectedCat === 'espresso' ? ' active' : ''
                  }`}
                  onClick={() => this.onChangeCat('espresso')}
                >
                  ESPRESSO
                </li>
                <li
                  className={`item ${
                    selectedCat === 'merchandise' ? ' active' : ''
                  }`}
                  onClick={() => this.onChangeCat('merchandise')}
                >
                  MERCHANDISE
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Productslist products={products} />
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
