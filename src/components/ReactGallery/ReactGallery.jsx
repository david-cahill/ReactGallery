import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ReactGalleryActions from '../../actions/ReactGalleryActions.js'
import SelectedImage from '../../components/SelectedImage/SelectedImage.jsx'
require('./ReactGallery.css')

@connect((state) => ({
  media: state.media.data,
  pagination: state.media.pagination
}), { ...ReactGalleryActions })
export default class ReactGallery extends Component {
  static propTypes = {
    media: PropTypes.array,
    switchOverlayOn: PropTypes.func,
    setSelectedImageIndex: PropTypes.func
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
    const { media } = this.props
    return (
      <div className="ReactGallery">
        <SelectedImage />
        <div className="ReactGallery-images">
          { media && media.map(({ images: { thumbnail: { url } } }, i) => {
              return <img onClick={() => this.imageClickHandler(i)} key={i} className="ReactGallery-image" src={url} />
            })
          }
        </div>
        <button onClick={ this.showMoreHandler.bind(this)} type="button">Show more...</button>
      </div>
    )
  }
}
