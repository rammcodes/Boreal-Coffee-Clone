import React, { Component } from 'react'
import './Sublocation.scss'

class Sublocation extends Component {
  state = {}
  render() {
    const { inverted, data } = this.props
    return (
      <div className="sub-location">
        {inverted ? null : (
          <div className="img-cont">
            <img
              src={require(`../../assets/img/${data.img}`)}
              alt="location"
              className="img"
            />
          </div>
        )}

        <div className="details">
          <div className="cont">
            <h4 className="txt-sm">{data.title}</h4>
            <h2 className="txt-bg">{data.name}</h2>
            <hr className="org-line" />
            <p className="para">{data.detail}</p>
            <button className="nav">
              <span className="txt">DISCOVER RUE DU STAND</span>
              <img
                src={require('../../assets/icons/right-arrow.png')}
                alt="arrow"
                className="icon"
              />
            </button>
          </div>
        </div>

        {inverted ? (
          <div className="img-cont">
            <img
              src={require(`../../assets/img/${data.img}`)}
              alt="location"
              className="img"
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default Sublocation
