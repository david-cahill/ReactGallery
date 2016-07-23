import React, { Component, PropTypes } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import ReactGalleryReducer from './reducers/ReactGalleryReducer.js'
import ReactGallery from './ReactGallery.jsx'
const initialState = { media: [] }
const store = createStore(ReactGalleryReducer, initialState)

require('./ReactGallery.css')

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ReactGallery { ...this.props } />
      </Provider>
    )
  }
}