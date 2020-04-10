import React, { Component } from 'react'
import './Productview.scss'
import Routeinfo from '../../components/Routeinfo/Routeinfo'

class Productview extends Component {
  state = {}
  render() {
    return (
      <div className="product-view">
        <Routeinfo />
      </div>
    )
  }
}

export default Productview
