'use client';
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _createComponent = _interopRequireDefault(require("../utils/createComponent"));
/**
 * VisuallyHidden is a component that visually hides its children while keeping them accessible to screen readers.
 *
 * @version 5.52.0
 * @see https://rsuitejs.com/components/visually-hidden/
 */
var VisuallyHidden = (0, _createComponent.default)({
  name: 'VisuallyHidden',
  componentAs: 'span'
});
var _default = VisuallyHidden;
exports.default = _default;