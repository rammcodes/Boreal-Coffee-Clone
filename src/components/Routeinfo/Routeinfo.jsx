import React from 'react'
import './Routeinfo.scss'

const Routeinfo = () => {
  return (
    <div className="route-info">
      <div className="container">
        <p className="route-list">
          <span className="route">Home</span>
          <span className="arrow-right">></span>
          <span className="route active">Shop</span>
        </p>
      </div>
    </div>
  )
}

export default Routeinfo
