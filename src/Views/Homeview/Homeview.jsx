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
      </div>
    )
  }
}

export default Homeview
