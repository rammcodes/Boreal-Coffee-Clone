import React, { Component } from 'react'
import Locationhighlight from '../../components/Locationhighlight/Locationhighlight'
import Twocolumns from '../../components/Twocolumns/Twocolumns'
import Brandhighlight from '../../components/Brandhighlight/Brandhighlight'
import './Sublocationview.scss'


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
          mainHead={'RUE DU STAND'}
          subHead={'THE FLAGSHIP'}
          img={'r-d-s-col.jpg'}
          detail={
            'The Boréal Coffee Rue du Stand is our first coffee shop and our flagship. Our café is a mix of bold colours and smooth music so you can relax with colleagues or friends while drinking one of our may beverages on offer.'
          }
          hasBtn={false}
        />
        <Brandhighlight />
        <Locationhighlight />
      </div>
    )
  }
}
export default Sublocationview
