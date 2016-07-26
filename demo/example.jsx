import React from 'react'
import { render } from 'react-dom'
import ReactGallery from '../dist/dc-react-gallery.js' //TODO publish to npm 
render(
  <ReactGallery instagramUsername="self" accessToken="" />,
  document.getElementById('app')
)