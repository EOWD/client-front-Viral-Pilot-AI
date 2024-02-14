'use client';
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../Button"));
var _utils = require("../utils");
var _PredefinedRanges = _interopRequireDefault(require("./PredefinedRanges"));
var _Stack = _interopRequireDefault(require("../Stack"));
var SubmitButton = function SubmitButton(_ref) {
  var disabledOkBtn = _ref.disabledOkBtn,
    calendarDate = _ref.calendarDate,
    onOk = _ref.onOk,
    children = _ref.children;
  var disabled = disabledOkBtn === null || disabledOkBtn === void 0 ? void 0 : disabledOkBtn(calendarDate);
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    appearance: "primary",
    size: "sm",
    disabled: disabled,
    onClick: disabled ? undefined : onOk
  }, children);
};

/**
 * Toolbar for DatePicker and DateRangePicker
 */
var Toolbar = /*#__PURE__*/_react.default.forwardRef(function Toolbar(props, ref) {
  var className = props.className,
    _props$classPrefix = props.classPrefix,
    classPrefix = _props$classPrefix === void 0 ? 'picker-toolbar' : _props$classPrefix,
    disabledOkBtn = props.disabledOkBtn,
    disabledShortcut = props.disabledShortcut,
    hideOkBtn = props.hideOkBtn,
    onOk = props.onOk,
    onShortcutClick = props.onShortcutClick,
    calendarDate = props.calendarDate,
    ranges = props.ranges,
    locale = props.locale,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "classPrefix", "disabledOkBtn", "disabledShortcut", "hideOkBtn", "onOk", "onShortcutClick", "calendarDate", "ranges", "locale"]);
  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
    merge = _useClassNames.merge,
    prefix = _useClassNames.prefix,
    withClassPrefix = _useClassNames.withClassPrefix;
  if (hideOkBtn && (ranges === null || ranges === void 0 ? void 0 : ranges.length) === 0) {
    return null;
  }
  var classes = merge(className, withClassPrefix());
  return /*#__PURE__*/_react.default.createElement(_Stack.default, (0, _extends2.default)({
    ref: ref,
    className: classes,
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, rest), /*#__PURE__*/_react.default.createElement(_PredefinedRanges.default, {
    wrap: true,
    className: prefix('ranges'),
    ranges: ranges,
    calendarDate: calendarDate,
    locale: locale,
    disabledShortcut: disabledShortcut,
    onShortcutClick: onShortcutClick,
    "data-testid": "daterange-predefined-bottom"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: prefix('right')
  }, !hideOkBtn && /*#__PURE__*/_react.default.createElement(SubmitButton, {
    disabledOkBtn: disabledOkBtn,
    calendarDate: calendarDate,
    onOk: onOk
  }, locale === null || locale === void 0 ? void 0 : locale.ok)));
});
var _default = Toolbar;
exports.default = _default;