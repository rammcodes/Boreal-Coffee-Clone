import React from 'react'
import './Homeview.scss'

class Homeview extends React.Component {
  state = {}
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
          <div class="layer"></div>
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
      </div>
    )
  }
}

export default Homeview
