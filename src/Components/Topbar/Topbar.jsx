import React from 'react'
import './Topbar.scss'

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="container">
        <div className="logo-container">
          <img
            src={require('../../assets/img/logo.png')}
            className="logo"
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <div className="item-container item-lg">
            <li className="item">WHO WE ARE?</li>
          </div>
          <div className="item-container">
            <li className="item">
              <span className="txt">CAFES</span>
              <img
                src={require('../../assets/icons/down.png')}
                alt="down"
                className="down"
              />
            </li>
          </div>
          <div className="item-container">
            <li className="item">
              <span className="txt">SHOP</span>
              <img
                src={require('../../assets/icons/down.png')}
                alt="down"
                className="down"
              />
            </li>
          </div>
          <div className="item-container item-lg">
            <li className="item">COFFEE CATERING</li>
          </div>
          <div className="item-container">
            <li className="item">CONTACT</li>
          </div>
          <div className="item-container">
            <li className="item">
              <img
                src={require('../../assets/icons/bag.png')}
                alt="cart"
                className="cart"
              />
              <span className="txt">CART</span>
            </li>
          </div>
          <div className="item-container item-md">
            <li className="item">
              <img
                src={require('../../assets/icons/user.png')}
                alt="user"
                className="user"
              />
              <span className="txt">ACCOUNT</span>
              <img
                src={require('../../assets/icons/down.png')}
                alt="down"
                className="down"
              />
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
