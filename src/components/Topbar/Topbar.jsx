import React from 'react'
import './Topbar.scss'
import { Link, withRouter } from 'react-router-dom'
import products from '../../data/products'

class Topbar extends React.Component {
  state = {
    showResMenu: false,
    scrolled: false,
    showCart: false,
    noUse: null,
    showResCart: false,
  }

  resMenuClick = () => {
    this.setState({ showResMenu: !this.state.showResMenu })
  }

  shouldTopbarChange = () => {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 200) {
        this.setState({ scrolled: true })
      } else this.setState({ scrolled: false })
    })
  }

  componentDidMount() {
    this.shouldTopbarChange()
  }

  onNavDropdownClick = (url) => {
    this.setState({ showResMenu: false })
    this.props.history.push(url)
  }

  onCartToggle = (val) => {
    this.setState({ showCart: val })
  }

  onResCartToggle = (val) => {
    this.setState({
      showResCart: val,
    })
  }

  getCartItems = () => {
    //  const { localStorage } = window
    let items = []
    // for (let i = 0; i < localStorage.length; i++) {
    //   let item = products.find(
    //     (prd) => prd.id.toString() === localStorage.key(i).toString()
    //   )
    //   items.push(item)
    // }
    return items
  }

  getCartTotal = () => {
    //const { localStorage } = window
    return null
    // let total = 0
    // for (let i = 0; i < localStorage.length; i++) {
    //   let item = products.find(
    //     (prd) => prd.id.toString() === localStorage.key(i).toString()
    //   )
    //   let price = parseFloat(item.rate.split(' '))
    //   total += price * localStorage.getItem(localStorage.key(i))
    // }
    // return total
  }

  removeCartItem = (id) => {
    localStorage.removeItem(id)
    this.setState({ noUse: null })
  }

  render() {
    const { showResMenu, scrolled, showCart, showResCart } = this.state
    const { topbarEffect } = this.props
    const { localStorage } = window
    const { getCartItems, onCartToggle, getCartTotal, removeCartItem } = this

    return (
      <nav
        className={`topbar ${
          topbarEffect ? (scrolled ? 'topbarInv' : '') : 'topbarInv'
        }`}
      >
        <div className="container">
          <Link to="/" className="logo-container">
            {topbarEffect ? (
              scrolled ? (
                <img
                  src={require('../../assets/img/black-logo.png')}
                  className="logo"
                  alt="logo"
                />
              ) : (
                <img
                  src={require('../../assets/img/logo.png')}
                  className="logo"
                  alt="logo"
                />
              )
            ) : (
              <img
                src={require('../../assets/img/black-logo.png')}
                className="logo"
                alt="logo"
              />
            )}
          </Link>
          <div className="nav-items large">
            <div
              onClick={() => this.onNavDropdownClick('/brandstory')}
              className="item-container item-lg"
            >
              <li className="item">WHO WE ARE?</li>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/mainlocation/1')}
              className="item-container"
            >
              <li className="item">
                <span className="txt">CAFES</span>
                <img
                  src={require('../../assets/icons/down.png')}
                  alt="down"
                  className="down"
                />
              </li>
              <ul className="item-dropdown">
                <li className="item-drop-ele">GENEVA</li>
                <li className="item-drop-ele">ZURICH</li>
              </ul>
            </div>

            <div
              onClick={() => this.onNavDropdownClick('/shop/all')}
              className="item-container"
            >
              <li className="item">
                <span className="txt">SHOP</span>
                <img
                  src={require('../../assets/icons/down.png')}
                  alt="down"
                  className="down"
                />
              </li>
              <ul className="item-dropdown">
                <Link to="/shop/filter" className="item-drop-ele">
                  FILTER
                </Link>
                <Link to="/shop/espresso" className="item-drop-ele">
                  ESPRESSO
                </Link>
                <Link to="/shop/merchandise" className="item-drop-ele">
                  MERCHANDISE
                </Link>
              </ul>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/cc')}
              className="item-container item-lg"
            >
              <li className="item">COFFEE CATERING</li>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/contact')}
              className="item-container"
            >
              <li className="item">CONTACT</li>
            </div>
            <div
              onMouseOver={() => onCartToggle(true)}
              onMouseLeave={() => onCartToggle(false)}
              className="item-container"
            >
              <li className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                      alt="shop-bag"
                      className="cart"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/bag.png')}
                      alt="cart"
                      className="cart"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                    alt="shop-bag"
                    className="cart"
                  />
                )}

                <span className="txt">CART</span>
              </li>
              {showCart ? (
                <div className="dropdown">
                  {JSON.parse(localStorage.cartItems).length ? (
                    <div className="cont">
                      {getCartItems().map((item, idx) => (
                        <div key={idx} className="item">
                          <div className="item-img-cont">
                            <img
                              src={require(`../../assets/img/ProductImages/${item.img}`)}
                              alt="item"
                              className="img"
                            />
                          </div>
                          <div className="details">
                            <h4 className="upper">{item.name}</h4>
                            <span className="lower">
                              {window.localStorage.getItem(item.id)} x{' '}
                              {item.rate}{' '}
                            </span>
                          </div>
                          <div
                            onClick={() => removeCartItem(item.id)}
                            className="close-cont"
                          >
                            <img
                              src={require('../../assets/icons/close.png')}
                              alt="close"
                              className="icon"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="msg-cont">Your Cart is Empty</div>
                  )}
                  {localStorage.length ? (
                    <>
                      <div className="total">Total: {getCartTotal()} CHF</div>
                      <div className="checkout-cont">
                        <button className="checkout">CHECKOUT</button>
                      </div>
                    </>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="item-container item-md">
              <li className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/material/48/000000/user.png"
                      alt="user"
                      className="user"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/user.png')}
                      alt="user"
                      className="user"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/material/48/000000/user.png"
                    alt="user"
                    className="user"
                  />
                )}

                <span className="txt">ACCOUNT</span>
                <img
                  src={require('../../assets/icons/down.png')}
                  alt="down"
                  className="down"
                />
              </li>
            </div>
          </div>
          <div className="nav-items small">
            <div className="item-container">
              <li onClick={() => this.onResCartToggle(true)} className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                      alt="shop-bag"
                      className="icon"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/bag.png')}
                      alt="shop-bag"
                      className="icon"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                    alt="shop-bag"
                    className="icon"
                  />
                )}
              </li>

              {showResCart ? (
                <div className="cart">
                  {Object.keys(localStorage.cartItems).length ? (
                    <div className="cont">
                      {getCartItems().map((item, idx) => (
                        <div key={idx} className="item">
                          <div className="item-img-cont">
                            <img
                              src={require(`../../assets/img/ProductImages/${item.img}`)}
                              alt="item"
                              className="img"
                            />
                          </div>
                          <div className="details">
                            <h4 className="name">{item.name}</h4>
                            <h4 className="calc">
                              {window.localStorage.getItem(item.id)} x{' '}
                              {item.rate}{' '}
                            </h4>
                          </div>
                          <div
                            onClick={() => removeCartItem(item.id)}
                            className="close-cont"
                          >
                            <img
                              src={require('../../assets/icons/close.png')}
                              alt="close"
                              className="icon"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="msg-cont">Your Cart is Empty</div>
                  )}
                  {localStorage.length ? (
                    <>
                      <div className="total">Total: {getCartTotal()} CHF</div>
                      <div className="checkout-cont">
                        <button className="checkout">CHECKOUT</button>
                      </div>
                    </>
                  ) : null}
                  <div
                    onClick={() => this.onResCartToggle(false)}
                    className="close"
                  >
                    <img
                      src={require('../../assets/icons/close.png')}
                      alt="close"
                      className="icon"
                    />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="item-container">
              <li className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/material/48/000000/user.png"
                      alt="user"
                      className="icon"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/user.png')}
                      alt="cart"
                      className="icon"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/material/48/000000/user.png"
                    alt="user"
                    className="icon"
                  />
                )}
              </li>
            </div>
            <div onClick={this.resMenuClick} className="item-container">
              <li className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/ios-filled/48/000000/menu.png"
                      alt="menu"
                      className="icon"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/menu.png')}
                      alt="menu"
                      className="icon"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/menu.png"
                    alt="menu"
                    className="icon"
                  />
                )}
              </li>
            </div>
          </div>
        </div>
        {showResMenu ? (
          <div className="res-menu">
            <div className="res-menu-container">
              <div
                onClick={() => this.onNavDropdownClick('/brandstory')}
                className="ele"
              >
                <Link to="#" className="main-link">
                  WHO WE ARE?
                </Link>
              </div>
              <div
                onClick={() => this.onNavDropdownClick('/mainlocation/1')}
                className="ele"
              >
                <Link to="#" className="main-link sub-main-link">
                  CAFES
                </Link>
                {/* <div className="sub">
                  <Link
                    onClick={() => this.onNavDropdownClick('/cc')}
                    to="#"
                    className="sub-name"
                  >
                    GENEVA
                  </Link>
                   <Link to="#" className="sub-link">
                    Rue du Stand
                  </Link>
                  <Link to="#" className="sub-link">
                    Mont-Blanc 17
                  </Link>
                  <Link to="#" className="sub-link">
                    Eaux-Vives
                  </Link> 
                </div> */}
                {/* <div className="sub">
                  <Link
                    onClick={() => this.onNavDropdownClick('/mainlocation')}
                    to="#"
                    className="sub-name"
                  >
                    Zurich
                  </Link>
                  <Link to="#" className="sub-link">
                    Talacker
                  </Link>
                  <Link to="#" className="sub-link">
                    Oerlikon
                  </Link> 
                </div> */}
              </div>
              <div
                onClick={() => this.onNavDropdownClick('/shop/all')}
                className="ele"
              >
                <Link to="#" className="main-link sub-main-link">
                  SHOP
                </Link>
                {/* <div className="sub">
                  <Link
                    onClick={() => this.onNavDropdownClick('/shop')}
                    to="#"
                    className="sub-link"
                  >
                    Filter
                  </Link>
                  <Link
                    onClick={() => this.onNavDropdownClick('/shop')}
                    to="#"
                    className="sub-link"
                  >
                    Espresso
                  </Link>
                  <Link
                    onClick={() => this.onNavDropdownClick('/shop')}
                    to="#"
                    className="sub-link"
                  >
                    Merchandise
                  </Link>
                </div> */}
              </div>
              <div
                onClick={() => this.onNavDropdownClick('/cc')}
                className="ele"
              >
                <Link to="#" className="main-link">
                  COFFEE CATERING
                </Link>
              </div>
              <div
                onClick={() => this.onNavDropdownClick('/contact')}
                className="ele"
              >
                <Link to="#" className="main-link">
                  CONTACT
                </Link>
              </div>
              {/* <div className="ele">
                <Link to="#" className="main-link">
                  TERMS & CONDITIONS
                </Link>
              </div> */}
              <div onClick={this.resMenuClick} className="close">
                <img
                  src={require('../../assets/icons/close.png')}
                  alt="close"
                  className="icon"
                />
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    )
  }
}

export default withRouter(Topbar)
