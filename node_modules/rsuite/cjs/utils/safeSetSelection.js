'use client';
"use strict";

exports.__esModule = true;
exports.default = void 0;
var _BrowserDetection = require("./BrowserDetection");
var defer = typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : setTimeout;
var strNone = 'none';
function safeSetSelection(element, selectionStart, selectionEnd) {
  if (document.activeElement === element) {
    if ((0, _BrowserDetection.isAndroid)()) {
      defer(function () {
        return element.setSelectionRange(selectionStart, selectionEnd, strNone);
      }, 0);
    } else {
      element.setSelectionRange(selectionStart, selectionEnd, strNone);
    }
  }
}
var _default = safeSetSelection;
exports.default = _default;