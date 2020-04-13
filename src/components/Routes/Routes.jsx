import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Homeview from '../../views/Homeview/Homeview'
import Shopview from '../../views/Shopview/Shopview'
import Productview from '../../views/Productview/Productview'

class Routes extends Component {
  state = {}
  render() {
    const { topbarEffectToggle } = this.props
    return (
      <>
        <Route
          exact
          path="/"
          render={(props) => (
            <Homeview {...props} topbarEffectToggle={topbarEffectToggle} />
          )}
        />
        <Route
          exact
          path="/shop"
          render={(props) => (
            <Shopview {...props} topbarEffectToggle={topbarEffectToggle} />
          )}
        />
        <Route
          path="/shop/product/:prdId"
          render={(props) => (
            <Productview {...props} topbarEffectToggle={topbarEffectToggle} />
          )}
        />
      </>
    )
  }
}

export default Routes
