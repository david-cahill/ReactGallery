import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ReactGalleryActions from '../../actions/ReactGalleryActions.js'
import SelectedImage from '../../components/SelectedImage/SelectedImage.jsx'
import ShadowOverlay from '../../components/ShadowOverlay/ShadowOverlay.jsx'
require('./ReactGallery.css')

@connect((state) => ({
  media: state.media.data,
  pagination: state.media.pagination,
  showOverlay: state.showOverlay
}), { ...ReactGalleryActions })
export default class ReactGallery extends Component {
  static propTypes = {
    media: PropTypes.array,
    switchOverlayOn: PropTypes.func,
    setSelectedImageIndex: PropTypes.func,
    showOverlay: PropTypes.bool
  }

  renderInstagramPhotos({ instagramUsername, accessToken }) {
    const { fetchInstagramPhotos } = this.props
    fetchInstagramPhotos({ instagramUsername, accessToken })
  }

  componentDidMount() {
    const { instagramUsername, accessToken } = this.props
    if (instagramUsername && accessToken) this.renderInstagramPhotos({ instagramUsername, accessToken })
  }

  imageClickHandler(index) {
    const { switchOverlayOn, setSelectedImageIndex } = this.props
    switchOverlayOn()
    setSelectedImageIndex({ index })
  }

  showMoreHandler() {
    const { pagination, fetchInstagramPhotos, instagramUsername, accessToken } = this.props
    fetchInstagramPhotos({ instagramUsername, accessToken, pagination })
  }

  render() {
    const { media, showOverlay, switchOverlayOff } = this.props
    return (
      <div className="ReactGallery">
        <ShadowOverlay showOverlay={showOverlay} switchOverlayOff={switchOverlayOff} />
        <SelectedImage />
        <div className="ReactGallery-images">
          { media && media.map(({ images: { thumbnail: { url } } }, i) => {
              return <img onClick={() => this.imageClickHandler(i)} key={i} className="ReactGallery-image" src={url} />
            })
          }
        </div>
        <button onClick={ this.showMoreHandler.bind(this) } type="button">Show more...</button>
      </div>
    )
  }
}
