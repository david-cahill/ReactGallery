import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ReactGalleryActions from '../../actions/ReactGalleryActions.js'
require('./SelectedImage.css')

@connect((state) => ({
  media: state.media,
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
    return (
      <div className="SelectedImage">
        { selectedImageIndex && <img className="SelectedImage-image" src={media[selectedImageIndex].images.standard_resolution.url} /> }
        <div onClick={ this.overlayClickHandler.bind(this) } className={overlayShadowClassName}></div>
      </div>
    )
  }
}
