'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useState, useCallback, useRef } from 'react';
import canUseDOM from 'dom-lib/canUseDOM';
import pick from 'lodash/pick';
export var mediaQuerySizeMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1400px)'
};
var matchMedia = function matchMedia(query) {
  if (canUseDOM) {
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
export function useMediaQueryLegacy(query) {
  var queries = Array.isArray(query) ? query : [query];
  var mediaQueries = queries.map(function (query) {
    return mediaQuerySizeMap[query] || query;
  });
  var _useState = useState(function () {
      return mediaQueries.map(function (query) {
        return pick(matchMedia(query), ['matches', 'media']);
      });
    }),
    mediaQueryArray = _useState[0],
    setMediaQueryArray = _useState[1];
  function handleChange(event) {
    setMediaQueryArray(function (prevMediaQueryArray) {
      return prevMediaQueryArray.map(function (item) {
        return item.media === event.media ? _extends({}, item, {
          matches: event.matches
        }) : item;
      });
    });
  }
  useEffect(function () {
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
export function useMediaQuery(query) {
  var _React$useSyncExterna;
  var queries = Array.isArray(query) ? query : [query];
  var mediaQueries = queries.map(function (query) {
    return mediaQuerySizeMap[query] || query;
  });
  var mediaQueryArray = useRef(mediaQueries.map(function (query) {
    return matchMedia(query).matches;
  }));
  var subscribe = useCallback(function (callback) {
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
  return (_React$useSyncExterna = React['useSyncExternalStore']) === null || _React$useSyncExterna === void 0 ? void 0 : _React$useSyncExterna.call(React, subscribe, getSnapshot, getServerSnapshot);
}
export default typeof React['useSyncExternalStore'] === 'function' ? useMediaQuery : useMediaQueryLegacy;