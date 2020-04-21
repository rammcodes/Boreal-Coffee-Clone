import React, { Component } from 'react'
import Locationhighlight from '../../components/Locationhighlight/Locationhighlight'
import Twocolumns from '../../components/Twocolumns/Twocolumns'
import Brandhighlight from '../../components/Brandhighlight/Brandhighlight'
import './Sublocationview.scss'
import Shortheader from '../../components/Shortheader/Shortheader'

class Sublocationview extends Component {
  state = {}
  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(true)
  }
  render() {
    return (
      <div className="sublocationview">
        <Shortheader
          subHead={'Our very first shop and flagship'}
          mainHead={'Boréal, Rue du Stand'}
          text={
            'Our café is a mix of bold colours and smooth music'
          }
          img={"r-d-s-hdr.jpg"}
        />
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
