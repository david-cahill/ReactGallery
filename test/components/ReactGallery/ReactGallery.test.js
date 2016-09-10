import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'
import { ReactGallery } from '../../../src/components/ReactGallery/ReactGallery.jsx'

describe('<ReactGallery />', () => {

  it('calls componentDidMount', () => {
    ReactGallery.prototype.componentDidMount = sinon.spy()
    mount(<ReactGallery />)
    expect(ReactGallery.prototype.componentDidMount.calledOnce).to.equal(true)
  })

})

// TODO add more tests