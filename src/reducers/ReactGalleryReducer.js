export default (state = {}, action) => {
  switch (action.type) {
  case 'SET_MEDIA':
    return ({
      ...state,
      media: action.media
    })
  break
  case 'SHOW_OVERLAY':
    return ({
      ...state,
      showOverlay: true
    })
  break
  case 'HIDE_OVERLAY':
    return ({
      ...state,
      showOverlay: false,
      selectedImageIndex: null
    })
  break
  case 'SET_SELECTED_IMAGE_INDEX':
    return ({
      ...state,
      selectedImageIndex: action.index
    })
  break
  default:
    return state
  }
}
