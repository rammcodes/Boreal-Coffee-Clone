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
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Homeview
