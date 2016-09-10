import React from 'react'
import { render } from 'react-dom'
import ReactGallery from '../src/components/Root/Root.jsx' // TODO publish to npm
const images = require('./data/images.json')
render(
  <ReactGallery images={images} instagramUsername="self" accessToken="" />,
  document.getElementById('app')
)