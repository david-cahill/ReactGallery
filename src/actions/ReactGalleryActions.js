import request from 'superagent'
import jsonp from 'superagent-jsonp'

export function setMedia({ media }) {
  return {
    type: 'SET_MEDIA',
    media
  }
}

export function switchOverlayOn() {
  return {
    type: 'SHOW_OVERLAY'
  }
}

export function switchOverlayOff() {
  return {
    type: 'HIDE_OVERLAY'
  }
}

export function setSelectedImageIndex({ index }) {
  return {
    type: 'SET_SELECTED_IMAGE_INDEX',
    index
  }
}

export function setGalleryDirection(galleryDirection) {
  return {
    type: 'SET_GALLERY_DIRECTION',
    galleryDirection
  }
}

export function fetchInstagramPhotos({ instagramUsername, accessToken, pagination }) {
  return (dispatch) => {
    const url = pagination && pagination.next_url ? pagination.next_url : `https://api.instagram.com/v1/users/${instagramUsername}/media/recent/?access_token=${accessToken}&count=6`
    request
      .get(url)
      .use(jsonp({
        timeout: 3000
      }))
      .end((err, { body: { pagination, data } }) => {
        if (err) return console.error(err)
        const media = { data, pagination }
        dispatch(setMedia({ media }))
      })
  }
}
