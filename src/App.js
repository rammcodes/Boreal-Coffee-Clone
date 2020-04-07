import React from 'react'
import Homeview from './Views/Homeview/Homeview'
import './App.scss'
import Topbar from './Components/Topbar/Topbar'
import Shopview from './Views/Shopview/Shopview'
import Footer from './Components/Footer/Footer'

class App extends React.Component {
  state = {
    topBarEffect: true,
  }

  toggleTopbarEffect = (val) => {
    this.setState({ topBarEffect: val })
  }

  render() {
    const { topBarEffect } = this.state
    const { toggleTopbarEffect } = this
    return (
      <div className="app">
        <Topbar topBarEffect={topBarEffect} />
        <Shopview toggleTopbarEffect={toggleTopbarEffect} />
        <Footer />
      </div>
    )
  }
}

export default App
