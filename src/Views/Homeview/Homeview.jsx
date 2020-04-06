import React from 'react'
import './Homeview.scss'

class Homeview extends React.Component {
  render() {
    return (
      <div className="homeview">
        <header className="homeview-header">
          <div className="container">
            <div className="content">
              <div className="hero-content">
                <img
                  src="http://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/content/home-hero.png"
                  alt="hero"
                  className="hero-design"
                />
              </div>
              <div className="header-nav-guide">
                <span className="nav-btn">
                  <span className="text">DISCOVER BOREAL</span>
                  <img
                    src={require('../../assets/icons/right-arrow.png')}
                    alt="right-arrow"
                    className="rt-arrow"
                  />
                </span>
                <span className="nav-btn">
                  <span className="text">VISIT OUR WEBSHOP</span>
                  <img
                    src={require('../../assets/icons/right-arrow.png')}
                    alt="right-arrow"
                    className="rt-arrow"
                  />
                </span>
              </div>
            </div>
            <div className="scroll-container">
              <img
                src={require('../../assets/icons/scroll.png')}
                alt="scroll"
                className="scroll"
              />
            </div>
          </div>
        </header>
        <section className="story">
          <div className="container">
            <div className="shops">
              <div className="shops-img-container">
                <img
                  src="http://www.borealcoffee.ch/images/thumbnails/800/532/promo_hover/1/block-home-1-hover.jpg"
                  alt="boreal-coffee-shop"
                  className="shop"
                />
              </div>
              <div className="details">
                <div className="content">
                  <h4 className="highlight">THE STORY OF OUR</h4>
                  <h2 className="title">COFFEE SHOPS</h2>
                  <hr className="org-line" />
                  <p className="text">
                    From an abandoned storage space to a convivial meeting place
                    in the heart of Geneva, our first café opened in April 2009
                    at Rue du Stand 60.
                  </p>
                  <br />
                  <p className="text">
                    Now in 3 locations in Geneva and 2 locations in Zürich,
                    customers can expect an amazing experience from bean to cup.
                    Boreal Coffee is committed to sourcing the finest quality
                    coffee beans from farmers around the world, directly traded,
                    and roasted with love each week in our artisanal roastery in
                    Carouge.
                  </p>
                  <br />
                  <p className="text">
                    Boréal Coffee expose photos of Léonard Fisch.
                  </p>
                  <button className="discover">
                    <span className="txt">DISCOVER OUR CAFES</span>
                    <img
                      src={require('../../assets/icons/right-arrow.png')}
                      alt="right"
                      className="right"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="manufacturing">
              <div className="manu-img-container">
                <img
                  src="http://www.borealcoffee.ch/images/thumbnails/800/532/promo_hover/1/home.jpg"
                  alt="boreal-coffee-industry"
                  className="shop"
                />
              </div>
              <div className="details">
                <div className="content">
                  <h4 className="highlight">FROM BEAN TO CUP AT</h4>
                  <h2 className="title">BOREAL'S ROASTERY</h2>
                  <hr className="org-line" />
                  <p className="text">
                    We opened an artisanal roastery in Carouge where our small
                    team of dedicated roasters works to match the profiles of
                    the green coffee beans we import with a roast that brings
                    out their best characteristics.
                  </p>
                  <br />
                  <p className="text">
                    And, knowing that we work directly with the farmers
                    themselves wherever possible to ensure better livelihoods
                    while caring for the environment, your beverage is one to
                    feel good about.
                  </p>
                  <button className="discover">
                    <span className="txt">LEARN ABOUT OUR ROASTERY</span>
                    <img
                      src={require('../../assets/icons/right-arrow.png')}
                      alt="right"
                      className="right"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="brew">
          <div className="layer"></div>
          <div className="content">
            <h4 className="short-title">JEBREW</h4>
            <h2 className="title">CAN'T MAKE IT BOREAL?</h2>
            <hr className="org-line" />
            <div className="text">
              Can't make it to Boreal? Whether you are looking for a hearty mug
              of black coffee in the morning or an after-lunch espresso, learn
              how to brew a perfect cup of coffee for your needs and tastes :
            </div>
            <div className="img-and-buy">
              <div className="img-cont">
                <img
                  src="http://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/content/blocks/jebrew-link.png"
                  alt="acc"
                  className="img-acc"
                />
              </div>
              <button className="buy">
                <span className="txt">TEACH ME HOW TO BREW</span>
                <img
                  src={require('../../assets/icons/right-arrow.png')}
                  alt="right-arrow"
                  className="right"
                />
              </button>
            </div>
          </div>
        </section>
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
                  Like what you see? Curious to taste our lovingly roasted
                  beans?
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
                      <select value="en">
                        <option value="en">EN</option>
                        <option value="fr">FR</option>
                      </select>
                    </div>
                    <div className="curr">
                      <h4 className="title">CURRENCY</h4>
                      <select value="chf">
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
      </div>
    )
  }
}

export default Homeview
