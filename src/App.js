import React from 'react'
import { Route } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar'
import Homeview from './views/Homeview/Homeview'
import Shopview from './views/Shopview/Shopview'
import Productview from './views/Productview/Productview'
import Footer from './components/Footer/Footer'
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
          exact
          path="/shop"
          render={(props) => (
            <Shopview {...props} topbarEffectToggle={this.topbarEffectToggle} />
          )}
        />
        <Route
          exact
          path="/shop/product"
          render={(props) => (
            <Productview
              {...props}
              topbarEffectToggle={this.topbarEffectToggle}
            />
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default App
