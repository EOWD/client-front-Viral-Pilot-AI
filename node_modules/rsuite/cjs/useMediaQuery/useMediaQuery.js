'use client';
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMediaQueryLegacy = useMediaQueryLegacy;
exports.useMediaQuery = useMediaQuery;
exports.default = exports.mediaQuerySizeMap = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _canUseDOM = _interopRequireDefault(require("dom-lib/canUseDOM"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var mediaQuerySizeMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1400px)'
};
exports.mediaQuerySizeMap = mediaQuerySizeMap;
var matchMedia = function matchMedia(query) {
  if (_canUseDOM.default) {
    return window.matchMedia(query);
  }
  return {
    matches: false,
    media: query
  };
};

/**
 * React hook that tracks state of a CSS media query.
 * @deprecated Use useMediaQuery instead.
 *
 * @see https://rsuitejs.com/components/use-media-query
 */
function useMediaQueryLegacy(query) {
  var queries = Array.isArray(query) ? query : [query];
  var mediaQueries = queries.map(function (query) {
    return mediaQuerySizeMap[query] || query;
  });
  var _useState = (0, _react.useState)(function () {
      return mediaQueries.map(function (query) {
        return (0, _pick.default)(matchMedia(query), ['matches', 'media']);
      });
    }),
    mediaQueryArray = _useState[0],
    setMediaQueryArray = _useState[1];
  function handleChange(event) {
    setMediaQueryArray(function (prevMediaQueryArray) {
      return prevMediaQueryArray.map(function (item) {
        return item.media === event.media ? (0, _extends2.default)({}, item, {
          matches: event.matches
        }) : item;
      });
    });
  }
  (0, _react.useEffect)(function () {
    var mediaQueryList = mediaQueries.map(function (query) {
      return matchMedia(query);
    });
    mediaQueryList.forEach(function (query) {
      query.addEventListener('change', handleChange);
    });
    return function () {
      mediaQueryList.forEach(function (query) {
        query.removeEventListener('change', handleChange);
      });
    };
  }, [mediaQueries]);
  return mediaQueryArray.map(function (query) {
    return query.matches;
  });
}

/**
 * React hook that tracks state of a CSS media query
 * @version 5.48.0
 * @see https://rsuitejs.com/components/use-media-query
 */
function useMediaQuery(query) {
  var _React$useSyncExterna;
  var queries = Array.isArray(query) ? query : [query];
  var mediaQueries = queries.map(function (query) {
    return mediaQuerySizeMap[query] || query;
  });
  var mediaQueryArray = (0, _react.useRef)(mediaQueries.map(function (query) {
    return matchMedia(query).matches;
  }));
  var subscribe = (0, _react.useCallback)(function (callback) {
    var list = mediaQueries.map(function (query) {
      return matchMedia(query);
    });
    var handleChange = function handleChange(event) {
      var index = list.findIndex(function (item) {
        return item.media === event.media;
      });
      if (index !== -1) {
        mediaQueryArray.current[index] = event.matches;
      }
      callback();
    };
    list.forEach(function (query) {
      query.addEventListener('change', handleChange);
    });
    return function () {
      list.forEach(function (query) {
        query.removeEventListener('change', handleChange);
      });
    };
  }, [mediaQueries]);
  var getSnapshot = function getSnapshot() {
    return mediaQueryArray.current;
  };
  var getServerSnapshot = function getServerSnapshot() {
    throw Error('useMediaQuery is a client-only hook');
  };
  return (_React$useSyncExterna = _react.default['useSyncExternalStore']) === null || _React$useSyncExterna === void 0 ? void 0 : _React$useSyncExterna.call(_react.default, subscribe, getSnapshot, getServerSnapshot);
}
var _default = typeof _react.default['useSyncExternalStore'] === 'function' ? useMediaQuery : useMediaQueryLegacy;
exports.default = _default;