import React, { Component } from 'react'
require('./ShadowOverlay.css')

export default class ShadowOverlay extends Component {
  render() {
    const { showOverlay, switchOverlayOff } = this.props
    const shadowOverlayClass = showOverlay ? 'ShadowOverlay is-visible' : 'ShadowOverlay'
    return (
      <div onClick={switchOverlayOff} className={shadowOverlayClass}></div>
    )
  }
}
