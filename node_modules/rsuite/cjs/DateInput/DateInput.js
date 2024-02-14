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
var _Input = _interopRequireDefault(require("../Input"));
var _utils = require("../utils");
var _utils2 = require("./utils");
var _useDateInputState2 = _interopRequireDefault(require("./useDateInputState"));
var _useKeyboardInputEvent = _interopRequireDefault(require("./useKeyboardInputEvent"));
var _useIsFocused2 = _interopRequireDefault(require("./useIsFocused"));
/**
 * The DateInput component lets users select a date with the keyboard.
 * @version 5.58.0
 * @see https://rsuitejs.com/components/date-input/
 */
var DateInput = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$format = props.format,
    formatStr = _props$format === void 0 ? 'yyyy-MM-dd' : _props$format,
    valueProp = props.value,
    defaultValue = props.defaultValue,
    placeholder = props.placeholder,
    onChange = props.onChange,
    onKeyDown = props.onKeyDown,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["format", "value", "defaultValue", "placeholder", "onChange", "onKeyDown", "onBlur", "onFocus"]);
  var inputRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)({
      selectedPattern: 'y',
      selectionStart: 0,
      selectionEnd: 0
    }),
    selectedState = _useState[0],
    setSelectedState = _useState[1];
  var _useCustom = (0, _utils.useCustom)('Calendar'),
    locale = _useCustom.locale;
  var dateLocale = locale.dateLocale;
  var _useControlled = (0, _utils.useControlled)(valueProp, defaultValue),
    value = _useControlled[0],
    setValue = _useControlled[1],
    isControlled = _useControlled[2];
  var _useDateInputState = (0, _useDateInputState2.default)({
      formatStr: formatStr,
      locale: dateLocale,
      date: value,
      isControlledDate: isControlled
    }),
    dateField = _useDateInputState.dateField,
    setDateOffset = _useDateInputState.setDateOffset,
    setDateField = _useDateInputState.setDateField,
    getDateField = _useDateInputState.getDateField,
    toDateString = _useDateInputState.toDateString,
    isEmptyValue = _useDateInputState.isEmptyValue;
  var dateString = toDateString();
  var keyPressOptions = (0, _react.useMemo)(function () {
    return {
      formatStr: formatStr,
      localize: dateLocale.localize,
      selectedMonth: dateField.month,
      dateString: dateString
    };
  }, [dateField, dateString, formatStr, dateLocale]);
  var handleChange = (0, _utils.useEventCallback)(function (value, event) {
    onChange === null || onChange === void 0 ? void 0 : onChange(value, event);
    setValue(value);
  });
  var setSelectionRange = (0, _utils2.useInputSelection)(inputRef);
  var onSegmentChange = (0, _utils.useEventCallback)(function (event, nextDirection) {
    var input = event.target;
    var key = event.key;
    var direction = nextDirection || (key === 'ArrowRight' ? 'right' : 'left');
    var state = (0, _utils2.getInputSelectedState)((0, _extends2.default)({}, keyPressOptions, {
      input: input,
      direction: direction
    }));
    setSelectionRange(state.selectionStart, state.selectionEnd);
    setSelectedState(state);
  });
  var onSegmentValueChange = (0, _utils.useEventCallback)(function (event) {
    var input = event.target;
    var key = event.key;
    var offset = key === 'ArrowUp' ? 1 : -1;
    var state = (0, _utils2.getInputSelectedState)((0, _extends2.default)({}, keyPressOptions, {
      input: input,
      valueOffset: offset
    }));
    setSelectedState(state);
    setDateOffset(state.selectedPattern, offset, function (date) {
      return handleChange(date, event);
    });
    setSelectionRange(state.selectionStart, state.selectionEnd);
  });
  var onSegmentValueChangeWithNumericKeys = (0, _utils.useEventCallback)(function (event) {
    var input = event.target;
    var key = event.key;
    var pattern = selectedState.selectedPattern;
    if (!pattern) {
      return;
    }
    var field = getDateField(pattern);
    var value = parseInt(key, 10);
    var padValue = parseInt("" + (field.value || '') + key, 10);
    var newValue = value;

    // Check if the value entered by the user is a valid date
    if ((0, _utils2.validateDateTime)(field.name, padValue)) {
      newValue = padValue;
    }
    if (pattern === 'M') {
      // Month cannot be less than 1.
      newValue = Math.max(1, newValue);
    }
    setDateField(pattern, newValue, function (date) {
      return handleChange(date, event);
    });

    // The currently selected month will be retained as a parameter of getInputSelectedState,
    // but if the user enters a month, the month value will be replaced with the value entered by the user.
    var selectedMonth = pattern === 'M' ? newValue : dateField.month;
    var nextState = (0, _utils2.getInputSelectedState)((0, _extends2.default)({}, keyPressOptions, {
      input: input,
      selectedMonth: selectedMonth
    }));
    setSelectedState(nextState);
    setSelectionRange(nextState.selectionStart, nextState.selectionEnd);

    // If the field is full value, move the cursor to the next field
    if ((0, _utils2.isFieldFullValue)(formatStr, newValue, pattern) && input.selectionEnd !== input.value.length) {
      onSegmentChange(event, 'right');
    }
  });
  var onSegmentValueRemove = (0, _utils.useEventCallback)(function (event) {
    var input = event.target;
    if (selectedState.selectedPattern) {
      var nextState = (0, _utils2.getInputSelectedState)((0, _extends2.default)({}, keyPressOptions, {
        input: input,
        valueOffset: null
      }));
      setSelectedState(nextState);
      setSelectionRange(nextState.selectionStart, nextState.selectionEnd);
      setDateField(selectedState.selectedPattern, null, function (date) {
        return handleChange(date, event);
      });
    }
  });
  var handleClick = (0, _utils.useEventCallback)(function (event) {
    var input = event.target;
    var state = (0, _utils2.getInputSelectedState)((0, _extends2.default)({}, keyPressOptions, {
      input: input
    }));
    setSelectedState(state);
    setSelectionRange(state.selectionStart, state.selectionEnd);
  });
  var onKeyboardInput = (0, _useKeyboardInputEvent.default)({
    onSegmentChange: onSegmentChange,
    onSegmentValueChange: onSegmentValueChange,
    onSegmentValueChangeWithNumericKeys: onSegmentValueChangeWithNumericKeys,
    onSegmentValueRemove: onSegmentValueRemove,
    onKeyDown: onKeyDown
  });
  var _useIsFocused = (0, _useIsFocused2.default)({
      onBlur: onBlur,
      onFocus: onFocus
    }),
    focused = _useIsFocused[0],
    focusEventProps = _useIsFocused[1];
  var renderedValue = (0, _react.useMemo)(function () {
    if (!isEmptyValue()) {
      return dateString;
    }
    return !focused ? '' : dateString;
  }, [dateString, focused, isEmptyValue]);
  return /*#__PURE__*/_react.default.createElement(_Input.default, (0, _extends2.default)({
    inputMode: focused ? 'numeric' : 'text',
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: false,
    ref: (0, _utils.mergeRefs)(inputRef, ref),
    onKeyDown: onKeyboardInput,
    onClick: handleClick,
    value: renderedValue,
    placeholder: placeholder || formatStr
  }, focusEventProps, rest));
});
DateInput.displayName = 'DateInput';
DateInput.propTypes = {
  defaultValue: _propTypes.default.instanceOf(Date),
  format: _propTypes.default.string,
  value: _propTypes.default.instanceOf(Date),
  placeholder: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func
};
var _default = DateInput;
exports.default = _default;