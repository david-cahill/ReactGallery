import React from 'react'
import { render } from 'react-dom'
import ReactGallery from '../src/components/Root/Root.jsx'

render(
  <ReactGallery instagramUsername="self" accessToken="" />,
  document.getElementById('app')
)