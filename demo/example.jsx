import React from 'react'
import { render } from 'react-dom'
import ReactGallery from '../src/components/Root/Root.jsx'

render(
  <ReactGallery instagramUsername="self" accessToken="27871683.3f8ba7d.66245c360bb9430898014492f350e640" />,
  document.getElementById('app')
)