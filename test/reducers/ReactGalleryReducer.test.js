import { createStore } from 'redux'
import ReactGalleryReducer from '../../src/reducers/ReactGalleryReducer.js'
import { setMedia, switchOverlayOn, switchOverlayOff, setSelectedImageIndex } from '../../src/actions/ReactGalleryActions.js'
import { assert } from 'chai'
import initialState from '../../src/lib/initialState.js'
let store

beforeEach(() => {
  store = createStore(ReactGalleryReducer, initialState)
})

describe('ReactGalleryReducer', () => {
  it('should update state.media when SET_MEDIA is called', () => {
    assert.equal(store.getState().media.data.length, 0)
    store.dispatch(setMedia({
      media: { data:
        [{
          image: 'http://instagram.com/imcool'
        },{
          image: 'http://instagram.com/selfie-legend'
        }]
      }
    }))
    assert.equal(store.getState().media.data.length, 2)
  })

  it('should update state.showOverlay when SHOW_OVERLAY is called', () => {
    assert.equal(store.getState().showOverlay, false)
    store.dispatch(switchOverlayOn())
    assert.equal(store.getState().showOverlay, true)
  })

  it('should update state.showOverlay when HIDE_OVERLAY is called', () => {
    assert.equal(store.getState().showOverlay, false)
    store.dispatch(switchOverlayOn())
    assert.equal(store.getState().showOverlay, true)
    store.dispatch(switchOverlayOff())
    assert.equal(store.getState().showOverlay, false)
  })

  it('should update state.selectedImageIndex when SET_SELECTED_IMAGE_INDEX is called', () => {
    assert.equal(store.getState().selectedImageIndex, null)
    store.dispatch(setSelectedImageIndex({ index: 4 }))
    assert.equal(store.getState().selectedImageIndex, 4)
  })
})
