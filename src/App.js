import React from 'react'
import { Route } from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Homeview from './Views/Homeview/Homeview'
import Shopview from './Views/Shopview/Shopview'
import Footer from './Components/Footer/Footer'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Topbar/>
        <Route exact path="/" render={(props) => <Homeview {...props} />} />
        <Route path="/shop" render={(props) => <Shopview {...props} />} />
        <Footer />
      </div>
    )
  }
}

export default App
