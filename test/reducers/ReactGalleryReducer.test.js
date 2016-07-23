import { createStore } from 'redux'
import ReactGalleryReducer from '../../src/reducers/ReactGalleryReducer.js'
import { setMedia } from '../../src/actions/ReactGalleryActions.js'
import { assert } from 'chai'
const initialState = { media: [] }
const store = createStore(ReactGalleryReducer, initialState)

describe('ReactGalleryReducer', () => {
  it('should update state.media when SET_MEDIA is called', () => {
    assert.equal(store.getState().media.length, 0)
    store.dispatch(setMedia({
      media:
      [{
        image: 'http://instagram.com/imcool'
      },{
        image: 'http://instagram.com/selfie-legend'
      }]
    }))
    assert.equal(store.getState().media.length, 2)
  })
})
