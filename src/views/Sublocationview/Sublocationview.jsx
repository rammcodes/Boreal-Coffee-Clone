import React, { Component } from 'react'
import locations from '../../data/locations'
import Locationhighlight from '../../components/Locationhighlight/Locationhighlight'
import Twocolumns from '../../components/Twocolumns/Twocolumns'
import Brandhighlight from '../../components/Brandhighlight/Brandhighlight'
import Shortheader from '../../components/Shortheader/Shortheader'
import './Sublocationview.scss'

class Sublocationview extends Component {
  state = {
    sublocation: null,
  }
  componentDidMount() {
    const { mlid, slid } = this.props.match.params
    window.scroll(0, 0)
    this.props.topbarEffectToggle(true)
    let mainloc = locations.find((l, i) => l.id.toString() === mlid.toString())
    let subloc = mainloc.subLocns.find(
      (sl, idx) => sl.id.toString() === slid.toString()
    )

    this.setState({
      sublocation: subloc,
    })
  }

  componentWillUnmount() {
    this.setState({
      sublocation: null,
    })
  }

  render() {
    const { sublocation } = this.state

    if (!sublocation) {
      return null
    }

    return (
      <div className="sublocationview">
        <Shortheader
          subHead={sublocation.tag}
          mainHead={sublocation.title}
          text={'Our café is a mix of bold colours and smooth music'}
          img={sublocation.headerBg}
        />
        <Twocolumns
          inverted={false}
          mainHead={sublocation.name}
          subHead={sublocation.title}
          img={sublocation.colImg}
          address={sublocation.address}
          detail={sublocation.detail}
          hasBtn={false}
        />
        <Brandhighlight />
        <Locationhighlight />
      </div>
    )
  }
}
export default Sublocationview
