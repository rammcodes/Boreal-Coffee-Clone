import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Footer from './components/Footer/Footer'
import Routes from './components/Routes/Routes'
import './App.scss'

class App extends React.Component {
  state = {
    topbarEffect: true,
  }

  topbarEffectToggle = (val) => {
    this.setState({ topbarEffect: val })
  }

  componentDidMount() {
    if (!window.localStorage.cartItems) {
      window.localStorage.setItem('cartItems', JSON.stringify({}))
    }
  }

  render() {
    return (
      <div className="app">
        <Topbar topbarEffect={this.state.topbarEffect} />
        <Routes topbarEffectToggle={this.topbarEffectToggle} />
        <Footer />
      </div>
    )
  }
}

export default App
