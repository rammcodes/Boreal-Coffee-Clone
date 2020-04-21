import React, { Component } from 'react'
import './Twocolumns.scss'
import { Link } from 'react-router-dom'

class Twocolumns extends Component {
  state = {}
  render() {
    const {
      img,
      subHead,
      mainHead,
      detail,
      hasBtn,
      inverted,
      noExtra,
    } = this.props
    return (
      <div className="two-cols">
        {inverted ? null : (
          <div
            style={{
              backgroundImage: `url(${require(`../../assets/img/${img}`)})`,
            }}
            className="img-cont"
          ></div>
        )}

        <div className="details">
          <div className="cont">
            <h4 className="txt-sm">{subHead}</h4>
            <h2 className="txt-bg">{mainHead}</h2>
            <hr className="org-line" />
            <p className="para">
              {/* {detail.map((ele, idx) => (
                <span key={idx}>{ele}</span>
              ))} */}
              {detail}
            </p>
            {noExtra === true ? null : hasBtn ? (
              <Link to="/sublocation" className="nav">
                <span className="txt">DISCOVER {mainHead}</span>
                <img
                  src={require('../../assets/icons/right-arrow.png')}
                  alt="arrow"
                  className="icon"
                />
              </Link>
            ) : (
              <div className="down">
                <div className="upper">
                  <h4 className="title">ADDRESS</h4>
                </div>
                <p className="plane">Rue du Stand 60 1204 Geneva</p>
              </div>
            )}
          </div>
        </div>

        {inverted ? (
          <div
            style={{
              backgroundImage: `url(${require(`../../assets/img/${img}`)})`,
            }}
            className="img-cont"
          ></div>
        ) : null}
      </div>
    )
  }
}

export default Twocolumns
