import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import ReactGallery from '../ReactGallery/ReactGallery.jsx'
import initialState from '../../lib/initialState.js'
import configureStore from '../../lib/configureStore'
const store = configureStore(initialState)

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ReactGallery { ...this.props } />
      </Provider>
    )
  }
}
