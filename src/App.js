import React from 'react'
import Homeview from './Views/Homeview/Homeview'
import './App.scss'
import Topbar from './Components/Topbar/Topbar'
import Shopview from './Views/Shopview/Shopview'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Topbar />
        <Shopview />
      </div>
    )
  }
}

export default App
