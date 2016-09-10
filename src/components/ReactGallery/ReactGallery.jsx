import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ReactGalleryActions from '../../actions/ReactGalleryActions.js'
import SelectedImage from '../../components/SelectedImage/SelectedImage.jsx'
import ShadowOverlay from '../../components/ShadowOverlay/ShadowOverlay.jsx'
require('./ReactGallery.css')

@connect((state) => ({
  media: state.media.data,
  pagination: state.media.pagination,
  showOverlay: state.showOverlay,
  selectedImageIndex: state.selectedImageIndex
}), { ...ReactGalleryActions })
export default class ReactGallery extends Component {
  static propTypes = {
    media: PropTypes.array,
    switchOverlayOn: PropTypes.func,
    setSelectedImageIndex: PropTypes.func,
    showOverlay: PropTypes.bool,
    setImageSources: PropTypes.func
  }

  renderImages(images) {
    const { setMedia } = this.props
    setMedia({ media: images })
  }

  renderInstagramPhotos({ instagramUsername, accessToken }) {
    const { fetchInstagramPhotos } = this.props
    fetchInstagramPhotos({ instagramUsername, accessToken })
  }

  componentDidMount() {
    const { instagramUsername, accessToken, images } = this.props
    if (images) return this.renderImages(images)
    if (instagramUsername && accessToken) return this.renderInstagramPhotos({ instagramUsername, accessToken })
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

  shadowOverlayClickHandler() {
    const { switchOverlayOff, setSelectedImageIndex } = this.props
    switchOverlayOff()
    setSelectedImageIndex({ index: null })
  }

  render() {
    const { media, showOverlay, selectedImageIndex, accessToken, instagramUsername, images } = this.props
    const isFromInstagram = accessToken && instagramUsername && !images
    const showSelectedImage = (selectedImageIndex !== null && selectedImageIndex > -1)
    return (
      <div className="ReactGallery">
        <ShadowOverlay showOverlay={showOverlay} clickHandler={this.shadowOverlayClickHandler.bind(this)} />
        { showSelectedImage && <SelectedImage /> }
        <div className="ReactGallery-images">
          { media && media.map(({ images: { thumbnail: { url } } }, i) => {
              return <img onClick={() => this.imageClickHandler(i)} key={i} className="ReactGallery-image" src={url} />
            })
          }
        </div>
        { isFromInstagram && <button onClick={ this.showMoreHandler.bind(this) } type="button">Show more...</button> }
      </div>
    )
  }
}
