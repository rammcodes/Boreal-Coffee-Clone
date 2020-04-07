import React from 'react'
import Homeview from './Views/Homeview/Homeview'
import './App.scss'
import Topbar from './Components/Topbar/Topbar'
import Shopview from './Views/Shopview/Shopview'
import Footer from './Components/Footer/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Topbar />
        <Homeview />
        <Footer />
      </div>
    )
  }
}

export default App
