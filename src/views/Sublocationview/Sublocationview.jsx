import React, { Component } from 'react'
import Locationhighlight from '../../components/Locationhighlight/Locationhighlight'
import './Sublocationview.scss'
import Twocolumns from '../../components/Twocolumns/Twocolumns'

class Sublocationview extends Component {
  state = {}
  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(true)
  }
  render() {
    return (
      <div className="sublocationview">
        <header className="slv-header">
          <div className="content">
            <h2 className="sub-title">Our very first shop and flagship</h2>
            <h2 className="title">Boréal, Rue du Stand</h2>
            <p className="plane">
              Our café is a mix of bold colours and smooth music
            </p>
          </div>
        </header>
        <Twocolumns 
        inverted={false}
        mainHead={"RUE DU STAND"}
        subHead={"THE FLAGSHIP"}
        img={"r-d-s-col.jpg"}
        detail={"The Boréal Coffee Rue du Stand is our first coffee shop and our flagship. Our café is a mix of bold colours and smooth music so you can relax with colleagues or friends while drinking one of our may beverages on offer."}
        hasBtn={false}
        />
        <div className="brand-highlight">
          <div className="container">
            <div className="cont">
              <div className="logo-cont">
                <img
                  src="data:image/png;base64,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"
                  alt="cup"
                  className="logo"
                />
              </div>
              <h3 className="txt-sm">The Flagship</h3>
              <div className="txt-bg">RUE DU STAND</div>
            </div>
          </div>
        </div>
        <Locationhighlight />
      </div>
    )
  }
}
export default Sublocationview