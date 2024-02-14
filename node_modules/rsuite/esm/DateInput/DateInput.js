'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { mergeRefs, useCustom, useControlled, useEventCallback } from '../utils';
import { getInputSelectedState, validateDateTime, isFieldFullValue, useInputSelection } from './utils';
import useDateInputState from './useDateInputState';
import useKeyboardInputEvent from './useKeyboardInputEvent';
import useIsFocused from './useIsFocused';
/**
 * The DateInput component lets users select a date with the keyboard.
 * @version 5.58.0
 * @see https://rsuitejs.com/components/date-input/
 */
var DateInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$format = props.format,
    formatStr = _props$format === void 0 ? 'yyyy-MM-dd' : _props$format,
    valueProp = props.value,
    defaultValue = props.defaultValue,
    placeholder = props.placeholder,
    onChange = props.onChange,
    onKeyDown = props.onKeyDown,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    rest = _objectWithoutPropertiesLoose(props, ["format", "value", "defaultValue", "placeholder", "onChange", "onKeyDown", "onBlur", "onFocus"]);
  var inputRef = useRef();
  var _useState = useState({
      selectedPattern: 'y',
      selectionStart: 0,
      selectionEnd: 0
    }),
    selectedState = _useState[0],
    setSelectedState = _useState[1];
  var _useCustom = useCustom('Calendar'),
    locale = _useCustom.locale;
  var dateLocale = locale.dateLocale;
  var _useControlled = useControlled(valueProp, defaultValue),
    value = _useControlled[0],
    setValue = _useControlled[1],
    isControlled = _useControlled[2];
  var _useDateInputState = useDateInputState({
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
  var keyPressOptions = useMemo(function () {
    return {
      formatStr: formatStr,
      localize: dateLocale.localize,
      selectedMonth: dateField.month,
      dateString: dateString
    };
  }, [dateField, dateString, formatStr, dateLocale]);
  var handleChange = useEventCallback(function (value, event) {
    onChange === null || onChange === void 0 ? void 0 : onChange(value, event);
    setValue(value);
  });
  var setSelectionRange = useInputSelection(inputRef);
  var onSegmentChange = useEventCallback(function (event, nextDirection) {
    var input = event.target;
    var key = event.key;
    var direction = nextDirection || (key === 'ArrowRight' ? 'right' : 'left');
    var state = getInputSelectedState(_extends({}, keyPressOptions, {
      input: input,
      direction: direction
    }));
    setSelectionRange(state.selectionStart, state.selectionEnd);
    setSelectedState(state);
  });
  var onSegmentValueChange = useEventCallback(function (event) {
    var input = event.target;
    var key = event.key;
    var offset = key === 'ArrowUp' ? 1 : -1;
    var state = getInputSelectedState(_extends({}, keyPressOptions, {
      input: input,
      valueOffset: offset
    }));
    setSelectedState(state);
    setDateOffset(state.selectedPattern, offset, function (date) {
      return handleChange(date, event);
    });
    setSelectionRange(state.selectionStart, state.selectionEnd);
  });
  var onSegmentValueChangeWithNumericKeys = useEventCallback(function (event) {
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
    if (validateDateTime(field.name, padValue)) {
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
    var nextState = getInputSelectedState(_extends({}, keyPressOptions, {
      input: input,
      selectedMonth: selectedMonth
    }));
    setSelectedState(nextState);
    setSelectionRange(nextState.selectionStart, nextState.selectionEnd);

    // If the field is full value, move the cursor to the next field
    if (isFieldFullValue(formatStr, newValue, pattern) && input.selectionEnd !== input.value.length) {
      onSegmentChange(event, 'right');
    }
  });
  var onSegmentValueRemove = useEventCallback(function (event) {
    var input = event.target;
    if (selectedState.selectedPattern) {
      var nextState = getInputSelectedState(_extends({}, keyPressOptions, {
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
  var handleClick = useEventCallback(function (event) {
    var input = event.target;
    var state = getInputSelectedState(_extends({}, keyPressOptions, {
      input: input
    }));
    setSelectedState(state);
    setSelectionRange(state.selectionStart, state.selectionEnd);
  });
  var onKeyboardInput = useKeyboardInputEvent({
    onSegmentChange: onSegmentChange,
    onSegmentValueChange: onSegmentValueChange,
    onSegmentValueChangeWithNumericKeys: onSegmentValueChangeWithNumericKeys,
    onSegmentValueRemove: onSegmentValueRemove,
    onKeyDown: onKeyDown
  });
  var _useIsFocused = useIsFocused({
      onBlur: onBlur,
      onFocus: onFocus
    }),
    focused = _useIsFocused[0],
    focusEventProps = _useIsFocused[1];
  var renderedValue = useMemo(function () {
    if (!isEmptyValue()) {
      return dateString;
    }
    return !focused ? '' : dateString;
  }, [dateString, focused, isEmptyValue]);
  return /*#__PURE__*/React.createElement(Input, _extends({
    inputMode: focused ? 'numeric' : 'text',
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: false,
    ref: mergeRefs(inputRef, ref),
    onKeyDown: onKeyboardInput,
    onClick: handleClick,
    value: renderedValue,
    placeholder: placeholder || formatStr
  }, focusEventProps, rest));
});
DateInput.displayName = 'DateInput';
DateInput.propTypes = {
  defaultValue: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};
export default DateInput;