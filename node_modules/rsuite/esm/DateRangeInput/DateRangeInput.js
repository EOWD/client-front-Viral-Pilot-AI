'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { mergeRefs, useClassNames, useCustom, useControlled, useEventCallback } from '../utils';
import { validateDateTime, isFieldFullValue, useDateInputState, useInputSelection, useKeyboardInputEvent, useIsFocused } from '../DateInput';
import { getInputSelectedState, DateType, getDateType, isSwitchDateType } from './utils';
/**
 * The DateRangeInput component lets users select a date with the keyboard.
 * @version 5.59.0
 * @see https://rsuitejs.com/components/date-range-input/
 */
var DateRangeInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    _props$classPrefix = props.classPrefix,
    classPrefix = _props$classPrefix === void 0 ? 'date-range-input' : _props$classPrefix,
    _props$character = props.character,
    character = _props$character === void 0 ? ' ~ ' : _props$character,
    _props$format = props.format,
    formatStr = _props$format === void 0 ? 'yyyy-MM-dd' : _props$format,
    valueProp = props.value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? [] : _props$defaultValue,
    placeholder = props.placeholder,
    onChange = props.onChange,
    onKeyDown = props.onKeyDown,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    rest = _objectWithoutPropertiesLoose(props, ["className", "classPrefix", "character", "format", "value", "defaultValue", "placeholder", "onChange", "onKeyDown", "onBlur", "onFocus"]);
  var _useClassNames = useClassNames(classPrefix),
    withClassPrefix = _useClassNames.withClassPrefix,
    merge = _useClassNames.merge;
  var classes = merge(className, withClassPrefix());
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
  var rangeFormatStr = "" + formatStr + character + formatStr;
  var dateLocale = locale.dateLocale;
  var _useControlled = useControlled(valueProp, defaultValue),
    value = _useControlled[0],
    setValue = _useControlled[1],
    isControlled = _useControlled[2];
  var _useState2 = useState(DateType.Start),
    dateType = _useState2[0],
    setDateType = _useState2[1];
  var dateInputOptions = {
    formatStr: formatStr,
    locale: dateLocale,
    isControlledDate: isControlled
  };
  var startDateState = useDateInputState(_extends({}, dateInputOptions, {
    date: (value === null || value === void 0 ? void 0 : value[0]) || null
  }));
  var endDateState = useDateInputState(_extends({}, dateInputOptions, {
    date: (value === null || value === void 0 ? void 0 : value[1]) || null
  }));
  var getActiveState = function getActiveState(type) {
    if (type === void 0) {
      type = dateType;
    }
    return type === DateType.Start ? startDateState : endDateState;
  };
  var _useIsFocused = useIsFocused({
      onBlur: onBlur,
      onFocus: onFocus
    }),
    focused = _useIsFocused[0],
    focusEventProps = _useIsFocused[1];
  var renderedValue = useMemo(function () {
    var dateString = startDateState.toDateString() + character + endDateState.toDateString();
    if (!startDateState.isEmptyValue() || !endDateState.isEmptyValue()) {
      return dateString;
    }
    return !focused ? '' : dateString;
  }, [character, endDateState, focused, startDateState]);
  var keyPressOptions = {
    formatStr: formatStr,
    rangeFormatStr: rangeFormatStr,
    localize: dateLocale.localize,
    selectedMonth: getActiveState().dateField.month,
    dateString: renderedValue,
    dateType: dateType,
    character: character
  };
  var setSelectionRange = useInputSelection(inputRef);
  var handleChange = useEventCallback(function (date, event) {
    var nextValue = dateType === DateType.Start ? [date, value === null || value === void 0 ? void 0 : value[1]] : [value === null || value === void 0 ? void 0 : value[0], date];
    onChange === null || onChange === void 0 ? void 0 : onChange(nextValue, event);
    setValue(nextValue);
  });
  var onSegmentChange = useEventCallback(function (event, nextDirection) {
    var input = event.target;
    var key = event.key;
    var direction = nextDirection || (key === 'ArrowRight' ? 'right' : 'left');
    if (input.selectionEnd === null || input.selectionStart === null) {
      return;
    }
    var cursorIndex = direction === 'right' ? input.selectionEnd : input.selectionStart;
    var nextDateType = dateType;
    if (isSwitchDateType(renderedValue, character, cursorIndex, direction)) {
      nextDateType = dateType === DateType.Start ? DateType.End : DateType.Start;
      setDateType(nextDateType);
    }
    var state = getInputSelectedState(_extends({}, keyPressOptions, {
      dateType: nextDateType,
      selectedMonth: getActiveState(nextDateType).dateField.month,
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
    getActiveState().setDateOffset(state.selectedPattern, offset, function (date) {
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
    var field = getActiveState().getDateField(pattern);
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
    getActiveState().setDateField(pattern, newValue, function (date) {
      return handleChange(date, event);
    });

    // The currently selected month will be retained as a parameter of getInputSelectedState,
    // but if the user enters a month, the month value will be replaced with the value entered by the user.
    var selectedMonth = pattern === 'M' ? newValue : getActiveState().dateField.month;
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
      getActiveState().setDateField(selectedState.selectedPattern, null, function (date) {
        return handleChange(date, event);
      });
    }
  });
  var handleClick = useEventCallback(function (event) {
    var input = event.target;
    if (input.selectionStart === null) {
      return;
    }
    var cursorIndex = input.selectionStart === renderedValue.length ? 0 : input.selectionStart;
    var dateType = getDateType(renderedValue, character, cursorIndex);
    var state = getInputSelectedState(_extends({}, keyPressOptions, {
      dateType: dateType,
      selectedMonth: getActiveState(dateType).dateField.month,
      input: input
    }));
    setDateType(dateType);
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
  return /*#__PURE__*/React.createElement(Input, _extends({
    inputMode: focused ? 'numeric' : 'text',
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: false,
    className: classes,
    ref: mergeRefs(inputRef, ref),
    onKeyDown: onKeyboardInput,
    onClick: handleClick,
    value: renderedValue,
    placeholder: placeholder || rangeFormatStr
  }, focusEventProps, rest));
});
DateRangeInput.displayName = 'DateRangeInput';
DateRangeInput.propTypes = {
  character: PropTypes.string,
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  format: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
export default DateRangeInput;