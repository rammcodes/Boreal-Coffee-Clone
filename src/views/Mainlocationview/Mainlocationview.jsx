import React, { Component } from 'react'
import locations from '../../data/locations'
import Twocolumns from '../../components/Twocolumns/Twocolumns'
import './Mainlocationview.scss'

class Mainlocationview extends Component {
  state = {
    location: null,
  }

  componentDidMount() {
    this.initialCall()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.mlid !== this.props.match.params.mlid) {
      this.initialCall()
    }
  }

  componentWillUnmount() {
    this.setState({ location: null })
  }

  onMainLocationClick = (id) => {
    this.props.history.push(`/mainlocation/${id}`)
  }

  initialCall = () => {
    const { mlid } = this.props.match.params
    window.scroll(0, 0)
    this.props.topbarEffectToggle(true)
    let selectedLoc = locations.find(
      (l, i) => l.id.toString() === mlid.toString()
    )
    this.setState({ location: selectedLoc })
  }

  render() {
    const { location } = this.state
    const { mlid } = this.props.match.params

    if (!location) {
      return null
    }

    return (
      <div className="mainlocationview">
        <header className="mlv-header">
          <div className="container">
            <div className="map-cont">
              <img
                src={require(`../../assets/img/${location.map}`)}
                alt="map"
                className="map"
              />
            </div>
            <h3 className="sub-txt">choose between our locations</h3>
            <div className="loc-opts">
              <h1
                className={`txt-bg ${mlid === '1' ? 'active' : null}`}
                onClick={() => this.onMainLocationClick(1)}
              >
                GENEVA
              </h1>
              <h4 className="txt-sm">OR</h4>
              <h1
                className={`txt-bg ${mlid === '2' ? 'active' : null}`}
                onClick={() => this.onMainLocationClick(2)}
              >
                ZURICH
              </h1>
            </div>
            <div className="hdr-bottom">
              <div className="img-cont">
                <img
                  src={require('../../assets/img/scroll-indicator-mlv.png')}
                  alt="scroll"
                  className="img"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="sub-loc-colln">
          {location.subLocns.map((subLocn, idx) => (
            <Twocolumns
              key={idx}
              inverted={idx % 2 === 0 ? false : true}
              mainHead={subLocn.name}
              subHead={subLocn.title}
              img={subLocn.headerBg}
              detail={subLocn.detail}
              hasBtn
              navlink={`/mainlocation/${location.id}/sublocation/${subLocn.id}`}
            />
          ))}
        </section>
      </div>
    )
  }
}

export default Mainlocationview
