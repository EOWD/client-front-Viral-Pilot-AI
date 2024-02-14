'use client';
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _icons = require("@rsuite/icons");
var _utils = require("../../utils");
var _InputGroup = _interopRequireDefault(require("../../InputGroup"));
var _CloseButton = _interopRequireDefault(require("../CloseButton"));
var _Loader = _interopRequireDefault(require("../../Loader"));
var PickerIndicator = function PickerIndicator(_ref) {
  var loading = _ref.loading,
    caretAs = _ref.caretAs,
    onClose = _ref.onClose,
    showCleanButton = _ref.showCleanButton,
    _ref$as = _ref.as,
    Component = _ref$as === void 0 ? _InputGroup.default.Addon : _ref$as;
  var _useCustom = (0, _utils.useCustom)(),
    locale = _useCustom.locale;
  var _useClassNames = (0, _utils.useClassNames)('picker'),
    prefix = _useClassNames.prefix;
  var addon = function addon() {
    if (loading) {
      return /*#__PURE__*/_react.default.createElement(_Loader.default, {
        className: prefix('loader'),
        "data-testid": "spinner"
      });
    }
    if (showCleanButton) {
      return /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
        className: prefix('clean'),
        tabIndex: -1,
        locale: {
          closeLabel: locale === null || locale === void 0 ? void 0 : locale.clear
        },
        onClick: onClose
      });
    }
    return caretAs && /*#__PURE__*/_react.default.createElement(_icons.Icon, {
      as: caretAs,
      className: prefix('caret-icon')
    });
  };
  return /*#__PURE__*/_react.default.createElement(Component, null, addon());
};
var _default = PickerIndicator;
exports.default = _default;