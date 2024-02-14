'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import Button from '../Button';
import { useClassNames } from '../utils';
import PredefinedRanges from './PredefinedRanges';
import Stack from '../Stack';
var SubmitButton = function SubmitButton(_ref) {
  var disabledOkBtn = _ref.disabledOkBtn,
    calendarDate = _ref.calendarDate,
    onOk = _ref.onOk,
    children = _ref.children;
  var disabled = disabledOkBtn === null || disabledOkBtn === void 0 ? void 0 : disabledOkBtn(calendarDate);
  return /*#__PURE__*/React.createElement(Button, {
    appearance: "primary",
    size: "sm",
    disabled: disabled,
    onClick: disabled ? undefined : onOk
  }, children);
};

/**
 * Toolbar for DatePicker and DateRangePicker
 */
var Toolbar = /*#__PURE__*/React.forwardRef(function Toolbar(props, ref) {
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
    rest = _objectWithoutPropertiesLoose(props, ["className", "classPrefix", "disabledOkBtn", "disabledShortcut", "hideOkBtn", "onOk", "onShortcutClick", "calendarDate", "ranges", "locale"]);
  var _useClassNames = useClassNames(classPrefix),
    merge = _useClassNames.merge,
    prefix = _useClassNames.prefix,
    withClassPrefix = _useClassNames.withClassPrefix;
  if (hideOkBtn && (ranges === null || ranges === void 0 ? void 0 : ranges.length) === 0) {
    return null;
  }
  var classes = merge(className, withClassPrefix());
  return /*#__PURE__*/React.createElement(Stack, _extends({
    ref: ref,
    className: classes,
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, rest), /*#__PURE__*/React.createElement(PredefinedRanges, {
    wrap: true,
    className: prefix('ranges'),
    ranges: ranges,
    calendarDate: calendarDate,
    locale: locale,
    disabledShortcut: disabledShortcut,
    onShortcutClick: onShortcutClick,
    "data-testid": "daterange-predefined-bottom"
  }), /*#__PURE__*/React.createElement("div", {
    className: prefix('right')
  }, !hideOkBtn && /*#__PURE__*/React.createElement(SubmitButton, {
    disabledOkBtn: disabledOkBtn,
    calendarDate: calendarDate,
    onOk: onOk
  }, locale === null || locale === void 0 ? void 0 : locale.ok)));
});
export default Toolbar;