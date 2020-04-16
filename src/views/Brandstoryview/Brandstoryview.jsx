import React, { Component } from 'react'
import './Brandstoryview.scss'

class Brandstoryview extends Component {
  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(true)
  }

  render() {
    return (
      <div className="brandstoryview">
        <header className="bsv-header">
          <div className="content">
            <h2 className="sub-title">WHO WE ARE?</h2>
            <h2 className="title">Learn more about Boréal Coffee</h2>
          </div>
        </header>
        <section className="brand-hl">
          <div className="container">
            <div className="brand-details">
              <h3 className="name">Boréal Coffee</h3>
              <h2 className="origin">Born in Geneva</h2>
              <hr className="org-line" />
              <div className="news-hl">
                <p className="news-credit">
                  Article and photo : © Clément Grandjean
                </p>
                <div className="news-shot-cont">
                  <img
                    src={require('../../assets/img/boreal-news-article.jpg')}
                    alt="news"
                    className="news-shot"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Brandstoryview
