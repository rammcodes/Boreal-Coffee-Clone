import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Homeview from '../../views/Homeview/Homeview'
import Shopview from '../../views/Shopview/Shopview'
import Productview from '../../views/Productview/Productview'
import Brandstoryview from '../../views/Brandstoryview/Brandstoryview'
import Mainlocationview from '../../views/Mainlocationview/Mainlocationview'
import Sublocationview from '../../views/Sublocationview/Sublocationview'
import Coffeecateringview from '../../views/Coffeecateringview/Coffeecateringview'
import Contactview from '../../views/Contactview/Contactview';

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
          path="/shop/:cat"
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
        <Route
          exact
          path="/brandstory"
          render={(props) => (
            <Brandstoryview
              {...props}
              topbarEffectToggle={topbarEffectToggle}
            />
          )}
        />
        <Route
          exact
          path="/mainlocation/:mlid"
          render={(props) => (
            <Mainlocationview
              {...props}
              topbarEffectToggle={topbarEffectToggle}
            />
          )}
        />
        <Route
          exact
          path="/mainlocation/:mlid/sublocation/:slid"
          render={(props) => (
            <Sublocationview
              {...props}
              topbarEffectToggle={topbarEffectToggle}
            />
          )}
        />
        <Route
          exact
          path="/cc"
          render={(props) => (
            <Coffeecateringview
              {...props}
              topbarEffectToggle={topbarEffectToggle}
            />
          )}
        />
         <Route
          exact
          path="/contact"
          render={(props) => (
            <Contactview
              {...props}
              topbarEffectToggle={topbarEffectToggle}
            />
          )}
        />
      </>
    )
  }
}

export default Routes
