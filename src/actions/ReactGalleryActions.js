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
