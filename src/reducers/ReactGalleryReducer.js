export default (state = { selectedImageIndex: null }, action) => {
  switch (action.type) {
  case 'SET_MEDIA':
    return ({
      ...state,
      media: {
        ...state.media,
        ...action.media,
        data: state.media.data.concat(action.media.data)
      }
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
