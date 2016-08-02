import React from 'react'
import { render } from 'react-dom'
import ReactGallery from '../src/components/Root/Root.jsx' // TODO publish to npm
render(
  <ReactGallery instagramUsername="self" accessToken="" />,
  document.getElementById('app')
)