import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import jsonp from 'superagent-jsonp'
import * as ReactGalleryActions from '../../actions/ReactGalleryActions.js'
require('./ReactGallery.css')

@connect((state) => ({
  media: state.media
}), ReactGalleryActions)
export default class ReactGallery extends Component {

  renderInstagramPhotos({ instagramUsername, accessToken }) {
    const { setMedia } = this.props
    request
    .get(`https://api.instagram.com/v1/users/${instagramUsername}/media/recent/?access_token=${accessToken}`)
    .use(jsonp({
      timeout: 3000
    }))
    .end((err, { body: { data: media } }) => {
      if (err) return console.error(err)
      setMedia({ media })
    })
  }

  componentDidMount() {
    const { instagramUsername, accessToken } = this.props
    if (instagramUsername && accessToken) this.renderInstagramPhotos({ instagramUsername, accessToken })
  }

  render() {
    const { media } = this.props
    return (
      <div className="ReactGallery">
        { media && media.map(({ images: { thumbnail: { url } } }, i) => {
            return <img key={i} className="ReactGallery-image" src={url} />
          })
        }
      </div>
    )
  }
}
