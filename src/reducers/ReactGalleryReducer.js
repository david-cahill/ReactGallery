export default (state = {}, action) => {
  switch (action.type) {
  case 'SET_MEDIA':
    return ({
      ...state,
      media: action.media
    })
  break
  default:
    return state
  }
}
