import React, { Component } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import './Locationhighlight.scss'

class Locationhighlight extends Component {
  state = {
    selectedImage: null,
    images: null,
  }

  onImageSelect = (idx) => {
    const { images } = this.state
    let url = images.find((img, i) => i === idx)
    let image = {
      idx,
      url,
    }
    this.setState({
      selectedImage: image,
    })
  }

  onNextImgClick = () => {
    const { selectedImage, images } = this.state
    let imageUrl = images[selectedImage.idx + 1]
    if (imageUrl) {
      this.setState({
        selectedImage: {
          idx: selectedImage.idx + 1,
          url: imageUrl,
        },
      })
    } else {
      this.setState({
        selectedImage: {
          idx: 0,
          url: images[0],
        },
      })
    }
  }

  closeImageShowcase = () => {
    this.setState({ selectedImage: null })
  }

  componentDidMount() {
    const { images } = this.props

    this.setState({
      images,
    })
  }

  render() {
    const { selectedImage, images } = this.state

    if (!images) {
      return null
    }

    return (
      <div className="location-highlight">
        <div className="container">
          {selectedImage ? (
            <div className="img-showcase">
              <OutsideClickHandler onOutsideClick={this.closeImageShowcase}>
                <div onClick={this.onNextImgClick} className="img-cont">
                  <img
                    src={require(`../../assets/img/${selectedImage.url}`)}
                    alt="view"
                    className="img"
                  />
                </div>
              </OutsideClickHandler>
            </div>
          ) : null}
          <div className="images">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="img-cont"
                onClick={() => this.onImageSelect(idx)}
              >
                <div className="shadow-layer"></div>
                <img
                  src={require(`../../assets/img/${img}`)}
                  alt="location-img"
                  className="img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Locationhighlight
