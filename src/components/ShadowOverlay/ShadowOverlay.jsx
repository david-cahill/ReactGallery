import React, { Component } from 'react'
if (process.browser) require('./ShadowOverlay.css')

export default class ShadowOverlay extends Component {
  render() {
    const { showOverlay, clickHandler } = this.props
    const shadowOverlayClass = showOverlay ? 'ShadowOverlay is-visible' : 'ShadowOverlay'
    return (
      <div onClick={clickHandler} className={shadowOverlayClass}></div>
    )
  }
}
