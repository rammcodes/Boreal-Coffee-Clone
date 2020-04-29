import React, { Component } from 'react'
import './Contactview.scss'
import Shortheader from '../../components/Shortheader/Shortheader'
import Brandhighlight from '../../components/Brandhighlight/Brandhighlight'

class Contactview extends Component {
  state = {}

  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(true)
  }

  render() {
    return (
      <div className="contact-view">
        <Shortheader
          mainHead={'Boréal Coffee'}
          subHead={'Get in touch with'}
          text={
            'Email us or find us on social media (or better yet, stop by and say hello!)'
          }
          img={'contact-hdr.jpg'}
        />
        <div className="main-content">
          <div className="left-cont">
            <div className="container">
              <h4 className="txt-sm">Developing talent at Boréal</h4>
              <h2 className="txt-bg">Work With Us !</h2>
              <hr className="org-line" />
              <div className="para">
                Are you passionate about coffee? Do you enjoy working in a
                young, dynamic organisation? <br /> Whether you already have
                experience with specialty coffee and barista talents or are
                interested in honing them, get in touch with us. We are growing
                quickly and frequently open to new talents. <br /> Before
                sending us your CV please make sure you that you fulfill the
                following requirements : <br />
                <ul>
                  <li>
                    You are available the weekends (you will not work every
                    weekend) and at least three half days in the week
                  </li>
                  <li>You are looking to work for at least one year</li>
                  <li> You can work a minimum of 20 hours per week</li>
                  <li>
                    {' '}
                    You love coffee and don't mind getting your hands dirty!
                  </li>
                </ul>
                <br />
                If you fulfill these requirements we want to hear from you!
                Please send us an email at{' '}
                <span className="txt-sm bold">admin@borealcoffee.ch</span> with
                your CV, a cover letter (PDF format) and your availabilities.
              </div>
            </div>
          </div>
          <div className="right-cont">
            <div className="container">
              <h4 className="txt-sm">Boréal Coffee</h4>
              <h2 className="txt-bg">Contact form</h2>
              <hr className="org-line" />
              <form className="form">
                <div className="form-cont">
                  <div className="form-field short-field">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                  </div>
                  <div className="form-field short-field">
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="form-cont">
                  <div className="form-field short-field">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                  </div>
                  <div className="form-field short-field">
                    <label htmlFor="">Phone</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="form-cont">
                  <div className="form-field">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>
                <div className="form-cont">
                  <button className="submit">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Brandhighlight
          mainHead={'Across and beyond Geneva'}
          subHead={'Discover the Boréal Coffee shops'}
        />
        <Shortheader
          mainHead={'A perfect coffee cup always awaits for you'}
          subHead={
            'No matter if you are in beautiful Geneva or in stunning Zurich'
          }
          text={
            'Email us or find us on social media (or better yet, stop by and say hello!)'
          }
          img={'kitchen.jpg'}
          smallMainHead
        />
      </div>
    )
  }
}

export default Contactview
