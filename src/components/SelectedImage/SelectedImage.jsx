import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ReactGalleryActions from '../../actions/ReactGalleryActions.js'
require('./SelectedImage.css')

@connect((state) => ({
  media: state.media.data,
  showOverlay: state.showOverlay,
  selectedImageIndex: state.selectedImageIndex
}), ReactGalleryActions)
export default class SelectedImage extends Component {
  static propTypes = {
    media: PropTypes.array,
    showOverlay: PropTypes.bool,
    switchOverlayOff: PropTypes.func,
    selectedImageIndex: PropTypes.number
  }

  overlayClickHandler() {
    const { switchOverlayOff, showOverlay } = this.props
    if (showOverlay) switchOverlayOff()
  }

  render() {
    const { media, selectedImageIndex, showOverlay } = this.props
    const overlayShadowClassName = showOverlay ? 'SelectedImage-shadow is-visible' : 'SelectedImage-shadow'
    const imageSource = media && media[selectedImageIndex] && media[selectedImageIndex].images.standard_resolution.url
    return (
      <div onClick={ this.overlayClickHandler.bind(this) } className="SelectedImage">
        { imageSource && <img className="SelectedImage-image" src={imageSource} /> }
        <div className={overlayShadowClassName}></div>
      </div>
    )
  }
}
