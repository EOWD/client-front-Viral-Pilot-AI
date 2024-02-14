'use client';
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OverlayTrigger = _interopRequireDefault(require("../internals/Overlay/OverlayTrigger"));
var _utils = require("../utils");
var _propTypes2 = require("../internals/propTypes");
var _CustomProvider = require("../CustomProvider");
/**
 * The `Whisper` component is used to display a floating element.
 * It is usually used with the `Tooltip` and `Popover` components.
 *
 * @see https://rsuitejs.com/components/whisper
 */
var Whisper = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var onOpen = props.onOpen,
    onClose = props.onClose,
    onEntered = props.onEntered,
    onExited = props.onExited,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    preventOverflow = props.preventOverflow,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["onOpen", "onClose", "onEntered", "onExited", "placement", "preventOverflow"]);
  var context = (0, _react.useContext)(_CustomProvider.CustomContext);
  return /*#__PURE__*/_react.default.createElement(_OverlayTrigger.default, (0, _extends2.default)({}, rest, {
    ref: ref,
    preventOverflow: preventOverflow,
    placement: (0, _utils.placementPolyfill)(placement, context === null || context === void 0 ? void 0 : context.rtl),
    onEntered: (0, _utils.createChainedFunction)(onOpen, onEntered),
    onExited: (0, _utils.createChainedFunction)(onClose, onExited)
  }));
});
Whisper.displayName = 'Whisper';
Whisper.propTypes = {
  onOpen: _propTypes.default.func,
  onClose: _propTypes.default.func,
  onEntered: _propTypes.default.func,
  onExited: _propTypes.default.func,
  placement: (0, _propTypes2.oneOf)(_utils.PLACEMENT),
  /**
   * Prevent floating element overflow
   */
  preventOverflow: _propTypes.default.bool,
  /**
   * Whether enable speaker follow cursor
   */
  followCursor: _propTypes.default.bool
};
var _default = Whisper;
exports.default = _default;