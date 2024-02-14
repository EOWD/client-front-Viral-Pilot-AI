'use client';
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = exports.ComboboxContextContext = exports.pickTriggerPropKeys = exports.omitTriggerPropKeys = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _OverlayTrigger = _interopRequireDefault(require("../../internals/Overlay/OverlayTrigger"));
var _utils = require("../../utils");
var omitTriggerPropKeys = ['onEntered', 'onExited', 'onEnter', 'onEntering', 'onExit', 'onExiting', 'open', 'defaultOpen', 'container', 'containerPadding', 'preventOverflow'];
exports.omitTriggerPropKeys = omitTriggerPropKeys;
var pickTriggerPropKeys = [].concat(omitTriggerPropKeys, ['disabled', 'plaintext', 'readOnly', 'loading', 'label']);
exports.pickTriggerPropKeys = pickTriggerPropKeys;
var ComboboxContextContext = /*#__PURE__*/_react.default.createContext({
  popupType: 'listbox'
});
exports.ComboboxContextContext = ComboboxContextContext;
var PickerToggleTrigger = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var pickerProps = props.pickerProps,
    speaker = props.speaker,
    placement = props.placement,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
    id = props.id,
    multiple = props.multiple,
    _props$popupType = props.popupType,
    popupType = _props$popupType === void 0 ? 'listbox' : _props$popupType,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["pickerProps", "speaker", "placement", "trigger", "id", "multiple", "popupType"]);
  var pickerTriggerProps = (0, _pick.default)(pickerProps, pickTriggerPropKeys);
  var pickerId = (0, _utils.useUniqueId)('rs-', id);
  var _useCustom = (0, _utils.useCustom)(),
    rtl = _useCustom.rtl;
  return /*#__PURE__*/_react.default.createElement(ComboboxContextContext.Provider, {
    value: {
      id: pickerId,
      hasLabel: typeof pickerTriggerProps.label !== 'undefined',
      multiple: multiple,
      popupType: popupType
    }
  }, /*#__PURE__*/_react.default.createElement(_OverlayTrigger.default, (0, _extends2.default)({}, pickerTriggerProps, rest, {
    disabled: pickerTriggerProps.disabled || pickerTriggerProps.loading,
    ref: ref,
    trigger: trigger,
    placement: (0, _utils.placementPolyfill)(placement, rtl),
    speaker: speaker
  })));
});
PickerToggleTrigger.displayName = 'PickerToggleTrigger';
var _default = PickerToggleTrigger;
exports.default = _default;