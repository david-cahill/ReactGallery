# ReactGallery
React component to display a gallery widget

This is an example of a basic reusable React component.

## Usage

`npm install --save dc-react-gallery`

The gallery can currently be used to show instagram images from your own account or from a data file. 
To use it with instagram please see the authenticate with instagram section below.
To get started, add the following code to your React component:

```javascript
import ReactGallery from 'dc-react-gallery'
<ReactGallery images={images} instagramUsername="self" accessToken="" />
```

The `images` object must have the following structure:

```json{
  "data": [
    {
      "images": {
        "thumbnail": {
          "url": "//c2.staticflickr.com/9/8750/28896232145_873323bb28_k.jpg"
        },
        "standard_resolution": {
          "url": "//c2.staticflickr.com/9/8750/28896232145_873323bb28_k.jpg"
        }
      }
    }
  ]
}
```

### Authenticate App through Instagram

Please go here:

https://api.instagram.com/oauth/authorize/?client_id=3f8ba7d1355a408a8ac9aee62e46f53e&redirect_uri=https://github.com/david-cahill&response_type=token

Click the authenticate button when requested and copy the access token in the url into the access token parameter for the ReactGallery component.

The instagram username parameter can be either "self" or your own username. This plugin does not support the fetching of other user's instagram photos due to instagram's API restrictions.


