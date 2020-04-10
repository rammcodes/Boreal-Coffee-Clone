import React from 'react'
import { Route } from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Homeview from './Views/Homeview/Homeview'
import Shopview from './Views/Shopview/Shopview'
import Footer from './Components/Footer/Footer'
import './App.scss'

class App extends React.Component {
  state = {
    topbarEffect: true,
  }

  topbarEffectToggle = (val) => {
    this.setState({ topbarEffect: val })
  }

  render() {
    return (
      <div className="app">
        <Topbar topbarEffect={this.state.topbarEffect} />
        <Route
          exact
          path="/"
          render={(props) => (
            <Homeview {...props} topbarEffectToggle={this.topbarEffectToggle} />
          )}
        />
        <Route
          path="/shop"
          render={(props) => (
            <Shopview {...props} topbarEffectToggle={this.topbarEffectToggle} />
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default App
