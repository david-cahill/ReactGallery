import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'
import ShadowOverlay  from '../../../src/components/ShadowOverlay/ShadowOverlay.jsx'

describe('<ShadowOverlay />', () => {

  it('calls componentDidMount', () => {
    ShadowOverlay.prototype.componentDidMount = sinon.spy()
    mount(<ShadowOverlay />)
    expect(ShadowOverlay.prototype.componentDidMount.calledOnce).to.equal(true)
  })

})
