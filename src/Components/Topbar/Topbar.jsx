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
            <li className="item">CAFES</li>
          </div>
          <div className="item-container">
            <li className="item">SHOP</li>
          </div>
          <div className="item-container item-lg">
            <li className="item">COFFEE CATERING</li>
          </div>
          <div className="item-container">
            <li className="item">CONTACT</li>
          </div>
          <div className="item-container">
            <li className="item">CART</li>
          </div>
          <div className="item-container">
            <li className="item">ACCOUNT</li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
