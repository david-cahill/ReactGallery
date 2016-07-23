'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _superagentJsonp = require('superagent-jsonp');

var _superagentJsonp2 = _interopRequireDefault(_superagentJsonp);

var _ReactGalleryActions = require('./actions/ReactGalleryActions.js');

var ReactGalleryActions = _interopRequireWildcard(_ReactGalleryActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./ReactGallery.css');

var ReactGallery = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    media: state.media
  };
}, ReactGalleryActions), _dec(_class = function (_Component) {
  _inherits(ReactGallery, _Component);

  function ReactGallery() {
    _classCallCheck(this, ReactGallery);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactGallery).apply(this, arguments));
  }

  _createClass(ReactGallery, [{
    key: 'renderInstagramPhotos',
    value: function renderInstagramPhotos(_ref) {
      var instagramUsername = _ref.instagramUsername;
      var accessToken = _ref.accessToken;
      var setMedia = this.props.setMedia;

      _superagent2.default.get('https://api.instagram.com/v1/users/' + instagramUsername + '/media/recent/?access_token=' + accessToken).use((0, _superagentJsonp2.default)({
        timeout: 3000
      })).end(function (err, _ref2) {
        var media = _ref2.body.data;

        if (err) return console.error(err);
        setMedia({ media: media });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var instagramUsername = _props.instagramUsername;
      var accessToken = _props.accessToken;

      if (instagramUsername && accessToken) this.renderInstagramPhotos({ instagramUsername: instagramUsername, accessToken: accessToken });
    }
  }, {
    key: 'render',
    value: function render() {
      var media = this.props.media;

      return _react2.default.createElement(
        'div',
        { className: 'ReactGallery' },
        media && media.map(function (resource, i) {
          return _react2.default.createElement('img', { key: i, className: 'ReactGallery-image', src: resource.images.thumbnail.url });
        })
      );
    }
  }]);

  return ReactGallery;
}(_react.Component)) || _class);
exports.default = ReactGallery;