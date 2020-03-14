import React from 'react'
import Homeview from './Views/Homeview/Homeview'
import './App.css'
import Topbar from './Components/Topbar/Topbar'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Topbar />
        <Homeview />
      </div>
    )
  }
}

export default App
