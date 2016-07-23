import React, { Component, PropTypes } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactGalleryReducer from '../../reducers/ReactGalleryReducer.js'
import ReactGallery from '../ReactGallery/ReactGallery.jsx'
const initialState = { media: [] }
const store = createStore(ReactGalleryReducer, initialState)

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ReactGallery { ...this.props } />
      </Provider>
    )
  }
}
