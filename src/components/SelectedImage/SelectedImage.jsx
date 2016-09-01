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

  onKeyDown = ({ code }) => {
    const { media, selectedImageIndex, setSelectedImageIndex } = this.props
    if (code === 'ArrowRight') {
      const index = selectedImageIndex < (media.length - 1) ? selectedImageIndex + 1 : 0
      setSelectedImageIndex({ index })
    } else if (code === 'ArrowLeft') {
      const index = selectedImageIndex !== 0 ? selectedImageIndex - 1 : (media.length - 1)
      setSelectedImageIndex({ index })
    }
  }

  onKeyDownBound = this.onKeyDown.bind(this)

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDownBound)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDownBound)
  }

  selectedImageClickHandler() {
    const { switchOverlayOff, setSelectedImageIndex } = this.props
    switchOverlayOff()
    setSelectedImageIndex({ index: null })
  }

  render() {
    const { media, selectedImageIndex } = this.props
    return (
      <div onClick={ this.selectedImageClickHandler.bind(this) } className="SelectedImage">
        {
          media.map((item, i) => {
            const isVisible = selectedImageIndex === i
            const className = `SelectedImage-image${isVisible ? ' is-visible' : ' is-hidden'}`
            return <img key={i} className={className} src={item.images.standard_resolution.url} />
          })
        }
      </div>
    )
  }
}
