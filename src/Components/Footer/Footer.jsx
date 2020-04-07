import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="shop-highlight">
        <div className="container">
          <div className="img-cont">
            <img
              src="http://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/content/boreal-coffee.png"
              alt="coffee"
              className="coffee"
            />
          </div>
          <div className="details">
            <p className="text">
              Like what you see? Curious to taste our lovingly roasted beans?
            </p>
            <span className="shop">
              Take a piece of Boreal home with you. This way to our e-shop
            </span>
          </div>
        </div>
      </div>
      <div className="main-details">
        <div className="container">
          <div className="footer-hls">
            <div className="brand-logo-cont">
              <img
                src="http://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/logo-footer.png"
                alt="brand-logo"
                className="logo"
              />
            </div>
            <div className="discover">
              <div className="main">
                <h4 className="hl">FIND US</h4>
                <p className="detail">
                  We have 3 shops in Geneva and 2 in Zurich
                </p>
                <button className="discover-btn">
                  <span className="txt">Discover them</span>
                  <img
                    src={require('../../assets/icons/right-arrow.png')}
                    alt="arrow"
                    className="right-arrow"
                  />
                </button>
              </div>
              <div className="map-img-cont">
                <img
                  src="https://borealcoffee.ch/design/themes/boreal/assets/dist/images/locations-footer.png"
                  alt="map"
                  className="map"
                />
              </div>
            </div>
            <div className="support">
              <h3 className="title">SUPPORT</h3>
              <div className="link-cont">
                <ul className="left-cont">
                  <li className="link">Cafes</li>
                  <li className="link">Coffee catering</li>
                  <li className="link">Jebrew</li>
                  <li className="link">Leonard Fisch</li>
                </ul>
                <ul className="right-cont">
                  <li className="link">Shop</li>
                  <li className="link">Terms & Conditions</li>
                  <li className="link">Contact</li>
                </ul>
              </div>
            </div>
            <div className="social-and-extra">
              <div className="lang-and-curr">
                <div className="lang">
                  <h4 className="title">LANGUAGE</h4>
                  <select>
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                  </select>
                </div>
                <div className="curr">
                  <h4 className="title">CURRENCY</h4>
                  <select>
                    <option value="chf">CHF</option>
                    <option value="eur">EUR</option>
                  </select>
                </div>
              </div>
              <div className="social">
                <h3 className="txt">FOLLOW US:</h3>
                <div className="social-links">
                  <div className="social-link">
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/facebook-f.png"
                      alt="social"
                      className="social"
                    />
                  </div>
                  <div className="social-link">
                    <img
                      src="https://img.icons8.com/android/24/000000/twitter.png"
                      alt="social"
                      className="social"
                    />
                  </div>
                  <div className="social-link">
                    <img
                      src="https://img.icons8.com/ios-filled/24/000000/instagram.png"
                      alt="social"
                      className="social"
                    />
                  </div>
                  <div className="social-link">
                    <img
                      src="https://img.icons8.com/material-rounded/24/000000/youtube-play.png"
                      alt="social"
                      className="social"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down">
        <span className="copyright">
          Copyright © 2015 - 2020 Boréal Coffee Shop. All rights reserved.
        </span>
        <div className="payment-opts">
          <img
            src="https://img.icons8.com/color/48/000000/visa.png"
            alt="pay-opt"
            className="pay-opt"
          />
          <img
            src="https://img.icons8.com/color/48/000000/mastercard.png"
            alt="pay-opt"
            className="pay-opt"
          />
          <img
            src="https://img.icons8.com/color/48/000000/amex.png"
            alt="pay-opt"
            className="pay-opt"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
