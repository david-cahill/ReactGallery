import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import sinon from 'sinon'
import { SelectedImage } from '../../../src/components/SelectedImage/SelectedImage.jsx'

describe('<SelectedImage />', () => {

  it('calls componentDidMount', () => {
    const props = {
      media: []
    }
    SelectedImage.prototype.componentDidMount = sinon.spy()
    mount(<SelectedImage { ...props } />)
    expect(SelectedImage.prototype.componentDidMount.calledOnce).to.equal(true)
  })

})
