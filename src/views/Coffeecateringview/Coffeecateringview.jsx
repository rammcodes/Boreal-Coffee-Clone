import React, { Component } from 'react'
import './Coffeecateringview.scss'
import Shortheader from '../../components/Shortheader/Shortheader'
import Twocolumns from '../../components/Twocolumns/Twocolumns'
import Locationhighlight from '../../components/Locationhighlight/Locationhighlight';

class Coffeecateringview extends Component {
  state = {}

  componentDidMount() {
    window.scroll(0, 0)
    this.props.topbarEffectToggle(true)
  }

  render() {
    return (
      <div className="cc-view">
        <Shortheader />
        <div className="content">
          <Twocolumns
            inverted={false}
            mainHead={'COFFEE SHOPS'}
            subHead={'THE STORY OF OUR'}
            detail={[
              `You are organizing an event and wish to offer your guests good coffee ? Then, you knocked on the right door !`,
              <br />,
              <br />,
              ` 
              Whether planning a conference, corporate off-site or a wedding, Boreal is a coffee specialist and offers only the best in terms of coffee-catering. Also thanks to its experience in this field since 2009, Boréal is highly qualified for serving all the coffee-based beverages (Espresso, Americano, Flat White, Latte Macchiato...
              `,
              <br />,
              <br />,
              ` 
              The coffees that we provide for your event are freshly roasted by our roasters in our roastery house located in Carouge. By the way, all our coffees are officially Organic certified since April 2018.`,
              <br />,
              <br />,
              `
              The baristi attending your event have been preselected and have a real know-how when it comes to coffee brewing and servicing. Regarding our equipment, we have always been working on La Marzocco coffee machines - these machines are to coffeemaking what Rolex is to watchmaking.
              `,
              <br />,
              <br />,
              `
              We are also happy to arrange a brew bar and an opportunity for guests to cup different coffees for a unique experience. Boreal manages everything, from logistics to transport, installation and removal of the machines to ensure quality and professionalism are the highest possible.
              `,
            ]}
            img={'coffee-making.jpg'}
            hasBtn
          />
          <Twocolumns
            inverted
            mainHead={'COFFEE SHOPS'}
            subHead={'THE STORY OF OUR'}
            detail={[
              `La Marzocco is our partner for coffee machines. These hand-made machines in Florence are amongst the best in the Specialty Coffee world.`,
              <br />,
              <br />,
              ` 
              La Marzocco was from 2000 to 2008 the official sponsor for the World Barista Championship (WBC), the most prestigious international competition that celebrates the coffee culture around the world.
              `,
              <br />,
              <br />,
              `
              We set up our coffee machines in your environment. All the technical specifications regarding the coffee machines will be provided to you prior to the event.
              `
            ]}
            img={'coffee-machine.jpg'}
            hasBtn
          />
          <Twocolumns
            inverted={false}
            mainHead={'COFFEE SHOPS'}
            subHead={'THE STORY OF OUR'}
            detail={[
              `La Marzocco is our partner for coffee machines. These hand-made machines in Florence are amongst the best in the Specialty Coffee world.`,
              <br />,
              <br />,
              ` 
              La Marzocco was from 2000 to 2008 the official sponsor for the World Barista Championship (WBC), the most prestigious international competition that celebrates the coffee culture around the world.
              `,
              <br />,
              <br />,
              `
              We set up our coffee machines in your environment. All the technical specifications regarding the coffee machines will be provided to you prior to the event.
              `
            ]}
            img={'coffee-beans.jpg'}
            hasBtn
          />
        </div>
        <Locationhighlight />
      </div>
    )
  }
}

export default Coffeecateringview
