import React, { Component, PropTypes } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import ReactGalleryReducer from '../../reducers/ReactGalleryReducer.js'
import ReactGallery from '../ReactGallery/ReactGallery.jsx'
import initialState from '../../lib/initialState.js'
const store = createStore(ReactGalleryReducer, initialState, applyMiddleware(thunk))

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ReactGallery { ...this.props } />
      </Provider>
    )
  }
}
