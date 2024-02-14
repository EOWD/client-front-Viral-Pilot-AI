'use client';
import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _templateObject;
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import mapValues from 'lodash/mapValues';
import pick from 'lodash/pick';
import delay from 'lodash/delay';
import omit from 'lodash/omit';
import IconCalendar from '@rsuite/icons/legacy/Calendar';
import IconClockO from '@rsuite/icons/legacy/ClockO';
import CalendarContainer from '../Calendar/CalendarContainer';
import useCalendarDate from '../Calendar/useCalendarDate';
import { isEveryDateInMonth } from '../Calendar/MonthDropdown';
import Toolbar from './Toolbar';
import Stack from '../Stack';
import PredefinedRanges from './PredefinedRanges';
import { createChainedFunction, mergeRefs, useClassNames, useControlled, useCustom, useUniqueId, useEventCallback, partitionHTMLProps } from '../utils';
import { shouldRenderMonth, shouldRenderDate, shouldRenderTime, shouldOnlyRenderTime, setHours, getHours, addMonths, addDays, isValid, disabledTime, copyTime, calendarOnlyProps } from '../utils/dateUtils';
import { PickerPopup, PickerLabel, PickerIndicator, PickerToggleTrigger, pickerPropTypes, pickTriggerPropKeys, omitTriggerPropKeys, usePickerClassName, usePickerRef, onMenuKeyDown } from '../internals/Picker';
import { OverlayCloseCause } from '../internals/Overlay/OverlayTrigger';
import DateInput from '../DateInput';
import InputGroup from '../InputGroup';
import { deprecatePropTypeNew } from '../internals/propTypes';
import { getAriaLabel } from '../Calendar/utils';
import { splitRanges } from './utils';
/**
 * A date picker allows users to select a date from a calendar.
 *
 * @see https://rsuitejs.com/components/date-picker
 */
var DatePicker = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _merge;
  var _props$as = props.as,
    Component = _props$as === void 0 ? 'div' : _props$as,
    className = props.className,
    _props$classPrefix = props.classPrefix,
    classPrefix = _props$classPrefix === void 0 ? 'picker' : _props$classPrefix,
    calendarDefaultDate = props.calendarDefaultDate,
    _props$cleanable = props.cleanable,
    cleanable = _props$cleanable === void 0 ? true : _props$cleanable,
    _props$editable = props.editable,
    editable = _props$editable === void 0 ? true : _props$editable,
    defaultValue = props.defaultValue,
    disabled = props.disabled,
    readOnly = props.readOnly,
    plaintext = props.plaintext,
    _props$format = props.format,
    formatStr = _props$format === void 0 ? 'yyyy-MM-dd' : _props$format,
    idProp = props.id,
    isoWeek = props.isoWeek,
    _props$limitEndYear = props.limitEndYear,
    limitEndYear = _props$limitEndYear === void 0 ? 1000 : _props$limitEndYear,
    limitStartYear = props.limitStartYear,
    overrideLocale = props.locale,
    loading = props.loading,
    label = props.label,
    menuClassName = props.menuClassName,
    menuStyle = props.menuStyle,
    _props$appearance = props.appearance,
    appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottomStart' : _props$placement,
    oneTap = props.oneTap,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
    ranges = props.ranges,
    valueProp = props.value,
    showMeridian = props.showMeridian,
    showWeekNumbers = props.showWeekNumbers,
    style = props.style,
    size = props.size,
    caretAsProp = props.caretAs,
    DEPRECATED_disabledDate = props.disabledDate,
    DEPRECATED_disabledHours = props.disabledHours,
    DEPRECATED_disabledMinutes = props.disabledMinutes,
    DEPRECATED_disabledSeconds = props.disabledSeconds,
    shouldDisableDate = props.shouldDisableDate,
    shouldDisableHour = props.shouldDisableHour,
    shouldDisableMinute = props.shouldDisableMinute,
    shouldDisableSecond = props.shouldDisableSecond,
    onChange = props.onChange,
    onChangeCalendarDate = props.onChangeCalendarDate,
    onClean = props.onClean,
    onClose = props.onClose,
    onEntered = props.onEntered,
    onExited = props.onExited,
    onNextMonth = props.onNextMonth,
    onOk = props.onOk,
    onOpen = props.onOpen,
    onPrevMonth = props.onPrevMonth,
    onSelect = props.onSelect,
    onToggleMonthDropdown = props.onToggleMonthDropdown,
    onToggleTimeDropdown = props.onToggleTimeDropdown,
    onShortcutClick = props.onShortcutClick,
    restProps = _objectWithoutPropertiesLoose(props, ["as", "className", "classPrefix", "calendarDefaultDate", "cleanable", "editable", "defaultValue", "disabled", "readOnly", "plaintext", "format", "id", "isoWeek", "limitEndYear", "limitStartYear", "locale", "loading", "label", "menuClassName", "menuStyle", "appearance", "placement", "oneTap", "placeholder", "ranges", "value", "showMeridian", "showWeekNumbers", "style", "size", "caretAs", "disabledDate", "disabledHours", "disabledMinutes", "disabledSeconds", "shouldDisableDate", "shouldDisableHour", "shouldDisableMinute", "shouldDisableSecond", "onChange", "onChangeCalendarDate", "onClean", "onClose", "onEntered", "onExited", "onNextMonth", "onOk", "onOpen", "onPrevMonth", "onSelect", "onToggleMonthDropdown", "onToggleTimeDropdown", "onShortcutClick"]);
  var id = useUniqueId('rs-', idProp);
  var _usePickerRef = usePickerRef(ref),
    trigger = _usePickerRef.trigger,
    root = _usePickerRef.root,
    target = _usePickerRef.target,
    overlay = _usePickerRef.overlay;
  var _useCustom = useCustom('DatePicker', overrideLocale),
    locale = _useCustom.locale,
    formatDate = _useCustom.formatDate;
  var _useClassNames = useClassNames(classPrefix),
    merge = _useClassNames.merge,
    prefix = _useClassNames.prefix;
  var _useControlled = useControlled(valueProp, defaultValue),
    value = _useControlled[0],
    setValue = _useControlled[1];
  var _useCalendarDate = useCalendarDate(value, calendarDefaultDate),
    calendarDate = _useCalendarDate.calendarDate,
    setCalendarDate = _useCalendarDate.setCalendarDate,
    resetCalendarDate = _useCalendarDate.resetCalendarDate;
  var _useState = useState(false),
    showMonthDropdown = _useState[0],
    setShowMonthDropdown = _useState[1]; // Show only the calendar month panel. formatStr = 'yyyy-MM'
  var onlyShowMonth = shouldRenderMonth(formatStr) && !shouldRenderDate(formatStr);
  var showMonth = onlyShowMonth || showMonthDropdown;
  var isDateDisabled = function isDateDisabled(date) {
    if (typeof shouldDisableDate === 'function') {
      return shouldDisableDate(date);
    }
    if (typeof DEPRECATED_disabledDate === 'function') {
      return DEPRECATED_disabledDate(date);
    }
    return false;
  };
  var isErrorValue = function isErrorValue(value) {
    if (!isValid(value)) {
      return true;
    } else if (value && isDateDisabled(value)) {
      return true;
    }
    return false;
  };

  /**
   * Switch to the callback triggered after the next month.
   */
  var handleMoveForward = useEventCallback(function (nextPageDate) {
    setCalendarDate(nextPageDate);
    onNextMonth === null || onNextMonth === void 0 ? void 0 : onNextMonth(nextPageDate);
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(nextPageDate);
  });

  /**
   * Switch to the callback triggered after the previous month.
   */
  var handleMoveBackward = useEventCallback(function (nextPageDate) {
    setCalendarDate(nextPageDate);
    onPrevMonth === null || onPrevMonth === void 0 ? void 0 : onPrevMonth(nextPageDate);
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(nextPageDate);
  });

  /**
   * The callback triggered when the date changes.
   */
  var handleDateChange = useEventCallback(function (nextValue, event) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(nextValue, event);
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(nextValue, event);
  });

  /**
   *  A callback triggered when the time on the calendar changes.
   */
  var handleChangeTime = useEventCallback(function (nextPageTime) {
    setCalendarDate(nextPageTime);
    handleDateChange(nextPageTime);
  });
  var handleClose = useEventCallback(function () {
    var _trigger$current, _trigger$current$clos;
    (_trigger$current = trigger.current) === null || _trigger$current === void 0 ? void 0 : (_trigger$current$clos = _trigger$current.close) === null || _trigger$current$clos === void 0 ? void 0 : _trigger$current$clos.call(_trigger$current);
  });

  /**
   * The callback triggered when PM/AM is switched.
   */
  var handleToggleMeridian = useEventCallback(function () {
    var hours = getHours(calendarDate);
    var nextHours = hours >= 12 ? hours - 12 : hours + 12;
    var nextDate = setHours(calendarDate, nextHours);
    handleChangeTime(nextDate);
  });
  var updateValue = function updateValue(event, nextPageDate, closeOverlay) {
    if (closeOverlay === void 0) {
      closeOverlay = true;
    }
    var nextValue = typeof nextPageDate !== 'undefined' ? nextPageDate : calendarDate;
    setCalendarDate(nextValue || new Date());
    setValue(nextValue);
    if (nextValue !== value) {
      onChange === null || onChange === void 0 ? void 0 : onChange(nextValue, event);
    }

    // `closeOverlay` default value is `true`
    if (closeOverlay !== false) {
      handleClose();
    }
  };

  /**
   * The callback triggered after the date in the shortcut area is clicked.
   */
  var handleShortcutPageDate = useEventCallback(function (range, closeOverlay, event) {
    var value = range.value;
    updateValue(event, value, closeOverlay);
    handleDateChange(value, event);
    onShortcutClick === null || onShortcutClick === void 0 ? void 0 : onShortcutClick(range, event);
  });

  /**
   * Get the corresponding container based on date selection and month selection
   */
  var getOverlayContainer = function getOverlayContainer() {
    return showMonth ? document.getElementById(id + "-calendar-month-dropdown") : document.getElementById(id + "-calendar-table");
  };

  /**
   * Check whether the date is focusable
   */
  var checkFocusable = function checkFocusable(date) {
    var formatStr = showMonth ? locale.formattedMonthPattern : locale.formattedDayPattern;
    var ariaLabel = getAriaLabel(date, formatStr, formatDate);
    var container = getOverlayContainer();
    var dateElement = container === null || container === void 0 ? void 0 : container.querySelector("[aria-label=\"" + ariaLabel + "\"]");
    if ((dateElement === null || dateElement === void 0 ? void 0 : dateElement.getAttribute('aria-disabled')) === 'true') {
      return false;
    }
    return true;
  };

  /**
   * Focus on the currently selected date element
   */
  var focusSelectedDate = function focusSelectedDate() {
    delay(function () {
      var container = getOverlayContainer();
      var selectedElement = container === null || container === void 0 ? void 0 : container.querySelector('[aria-selected="true"]');
      selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.focus();
    }, 1);
  };

  /**
   * Focus on the input element
   */
  var focusTargetInput = useEventCallback(function () {
    delay(function () {
      var _target$current;
      return (_target$current = target.current) === null || _target$current === void 0 ? void 0 : _target$current.focus();
    }, 1);
  });

  /**
   * The callback triggered after clicking the OK button.
   */
  var handleOK = useEventCallback(function (event) {
    updateValue(event);
    onOk === null || onOk === void 0 ? void 0 : onOk(calendarDate, event);
    focusTargetInput();
  });

  /**
   * Callback after clicking the clear button.
   */

  var handleClean = useEventCallback(function (event) {
    updateValue(event, null);
    resetCalendarDate(null);
    onClean === null || onClean === void 0 ? void 0 : onClean(event);
    event.stopPropagation();
  });
  var handlePickerPopupKeyDown = useEventCallback(function (event) {
    var delta = 0;
    var step = showMonth ? 6 : 7;
    var changeDateFunc = showMonth ? addMonths : addDays;
    onMenuKeyDown(event, {
      down: function down() {
        delta = step;
      },
      up: function up() {
        delta = -step;
      },
      right: function right() {
        delta = 1;
      },
      left: function left() {
        delta = -1;
      },
      enter: function enter() {
        handleOK(event);
      }
    });
    var nextDate = changeDateFunc(calendarDate, delta);
    if (checkFocusable(nextDate)) {
      setCalendarDate(nextDate);
      focusSelectedDate();
    }
  });

  /**
   * The callback triggered after the month selection box is opened or closed.
   */
  var handleToggleMonthDropdown = useEventCallback(function (toggle) {
    onToggleMonthDropdown === null || onToggleMonthDropdown === void 0 ? void 0 : onToggleMonthDropdown(toggle);
    setShowMonthDropdown(toggle);
  });
  var handleClick = useEventCallback(function () {
    if (editable) {
      return;
    }
    focusSelectedDate();
  });

  /**
   * Callback after the date is selected.
   */
  var handleSelect = useEventCallback(function (nextValue, event, updatableValue) {
    if (updatableValue === void 0) {
      updatableValue = true;
    }
    setCalendarDate(
    // Determine whether the current value contains time, if not, use calendarDate.
    shouldRenderTime(formatStr) ? nextValue : copyTime({
      from: calendarDate,
      to: nextValue
    }));
    handleDateChange(nextValue);
    if (oneTap && updatableValue) {
      updateValue(event, nextValue);
      focusTargetInput();
    }
  });

  /**
   *  A callback triggered when the date on the calendar changes.
   */
  var handleChangeMonth = useEventCallback(function (nextPageDate, event) {
    setCalendarDate(nextPageDate);
    handleDateChange(nextPageDate);
    focusSelectedDate();
    if (oneTap && onlyShowMonth) {
      updateValue(event, nextPageDate);
      focusTargetInput();
    }
  });

  /**
   * Callback after the input box value is changed.
   */
  var handleInputChange = useEventCallback(function (value, event) {
    if (!isErrorValue(value)) {
      handleSelect(value, event);
    }
    updateValue(event, value, false);
  });
  var handleInputKeyDown = useEventCallback(function (event) {
    onMenuKeyDown(event, {
      esc: handleClose,
      enter: function enter() {
        var _trigger$current2;
        var _ref = ((_trigger$current2 = trigger.current) === null || _trigger$current2 === void 0 ? void 0 : _trigger$current2.getState()) || {},
          open = _ref.open;
        if (open) {
          if (isValid(calendarDate) && !isDateDisabled(calendarDate)) {
            updateValue(event);
            focusTargetInput();
          }
        } else {
          var _trigger$current3;
          (_trigger$current3 = trigger.current) === null || _trigger$current3 === void 0 ? void 0 : _trigger$current3.open();
        }
      }
    });
  });

  // Check whether the time is within the time range of the shortcut option in the toolbar.
  var disabledToolbarHandle = function disabledToolbarHandle(date) {
    var _DEPRECATED_disabledD;
    var allowDate = (_DEPRECATED_disabledD = DEPRECATED_disabledDate === null || DEPRECATED_disabledDate === void 0 ? void 0 : DEPRECATED_disabledDate(date)) !== null && _DEPRECATED_disabledD !== void 0 ? _DEPRECATED_disabledD : false;
    var allowTime = disabledTime(props, date);
    return allowDate || allowTime;
  };

  /**
   * Whether "OK" button is disabled
   *
   * - If format is date, disable ok button if selected date is disabled
   * - If format is month, disable ok button if all dates in the month of selected date are disabled
   */
  var isOKButtonDisabled = function isOKButtonDisabled(selectedDate) {
    if (shouldRenderMonth(formatStr) && !shouldRenderDate(formatStr)) {
      return isEveryDateInMonth(selectedDate.getFullYear(), selectedDate.getMonth(), disabledToolbarHandle);
    }
    return disabledToolbarHandle(selectedDate);
  };
  var calendarProps = useMemo(function () {
    return mapValues(pick(props, calendarOnlyProps), function (disabledOrHiddenTimeFunc) {
      return function (next, date) {
        var _disabledOrHiddenTime;
        return (_disabledOrHiddenTime = disabledOrHiddenTimeFunc === null || disabledOrHiddenTimeFunc === void 0 ? void 0 : disabledOrHiddenTimeFunc(next, date)) !== null && _disabledOrHiddenTime !== void 0 ? _disabledOrHiddenTime : false;
      };
    });
  }, [props]);
  var _splitRanges = splitRanges(ranges),
    sideRanges = _splitRanges.sideRanges,
    bottomRanges = _splitRanges.bottomRanges;
  var renderCalendarOverlay = function renderCalendarOverlay(positionProps, speakerRef) {
    var left = positionProps.left,
      top = positionProps.top,
      className = positionProps.className;
    var classes = merge(menuClassName, className);
    var styles = _extends({}, menuStyle, {
      left: left,
      top: top
    });
    return /*#__PURE__*/React.createElement(PickerPopup, {
      role: "dialog",
      "aria-labelledby": label ? id + "-label" : undefined,
      tabIndex: -1,
      className: classes,
      ref: mergeRefs(overlay, speakerRef),
      style: styles,
      target: trigger,
      onKeyDown: handlePickerPopupKeyDown
    }, /*#__PURE__*/React.createElement(Stack, {
      alignItems: "flex-start"
    }, sideRanges.length > 0 && /*#__PURE__*/React.createElement(PredefinedRanges, {
      direction: "column",
      spacing: 0,
      className: prefix('date-predefined'),
      ranges: sideRanges,
      calendarDate: calendarDate,
      locale: locale,
      disabledShortcut: disabledToolbarHandle,
      onShortcutClick: handleShortcutPageDate
    }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CalendarContainer, _extends({}, calendarProps, {
      targetId: id,
      locale: locale,
      showWeekNumbers: showWeekNumbers,
      showMeridian: showMeridian,
      disabledDate: isDateDisabled,
      disabledHours: shouldDisableHour !== null && shouldDisableHour !== void 0 ? shouldDisableHour : DEPRECATED_disabledHours,
      disabledMinutes: shouldDisableMinute !== null && shouldDisableMinute !== void 0 ? shouldDisableMinute : DEPRECATED_disabledMinutes,
      disabledSeconds: shouldDisableSecond !== null && shouldDisableSecond !== void 0 ? shouldDisableSecond : DEPRECATED_disabledSeconds,
      limitEndYear: limitEndYear,
      limitStartYear: limitStartYear,
      format: formatStr,
      isoWeek: isoWeek,
      calendarDate: calendarDate,
      onMoveForward: handleMoveForward,
      onMoveBackward: handleMoveBackward,
      onSelect: handleSelect,
      onToggleMonthDropdown: handleToggleMonthDropdown,
      onToggleTimeDropdown: onToggleTimeDropdown,
      onChangeMonth: handleChangeMonth,
      onChangeTime: handleChangeTime,
      onToggleMeridian: handleToggleMeridian
    })), /*#__PURE__*/React.createElement(Toolbar, {
      locale: locale,
      ranges: bottomRanges,
      calendarDate: calendarDate,
      disabledOkBtn: isOKButtonDisabled,
      disabledShortcut: disabledToolbarHandle,
      onShortcutClick: handleShortcutPageDate,
      onOk: handleOK,
      hideOkBtn: oneTap
    }))));
  };
  var hasValue = isValid(value);
  var _usePickerClassName = usePickerClassName(_extends({}, props, {
      classPrefix: classPrefix,
      name: 'date',
      appearance: appearance,
      hasValue: hasValue,
      cleanable: cleanable
    })),
    classes = _usePickerClassName[0],
    usedClassNamePropKeys = _usePickerClassName[1];
  var caretAs = useMemo(function () {
    if (caretAsProp === null) {
      return null;
    }
    return caretAsProp || (shouldOnlyRenderTime(formatStr) ? IconClockO : IconCalendar);
  }, [caretAsProp, formatStr]);
  var handleTriggerClose = useEventCallback(function (cause) {
    // Unless overlay is closing on user clicking "OK" button,
    // reset the selected date on calendar panel
    if (cause !== OverlayCloseCause.ImperativeHandle) {
      resetCalendarDate();
    }
    setShowMonthDropdown(false);
  });
  var showCleanButton = cleanable && hasValue && !readOnly;
  var _partitionHTMLProps = partitionHTMLProps(restProps, {
      htmlProps: [],
      includeAria: true
    }),
    ariaProps = _partitionHTMLProps[0],
    rest = _partitionHTMLProps[1];
  var invalidValue = value && isErrorValue(value);
  return /*#__PURE__*/React.createElement(PickerToggleTrigger, {
    trigger: "active",
    pickerProps: pick(props, pickTriggerPropKeys),
    ref: trigger,
    placement: placement,
    onClose: handleTriggerClose,
    onEntered: createChainedFunction(onOpen, onEntered),
    onExited: createChainedFunction(onClose, onExited),
    speaker: renderCalendarOverlay
  }, /*#__PURE__*/React.createElement(Component, {
    className: merge(className, classes, (_merge = {}, _merge[prefix('error')] = invalidValue, _merge)),
    style: style,
    ref: root
  }, plaintext ? /*#__PURE__*/React.createElement(DateInput, {
    value: value,
    format: formatStr,
    plaintext: plaintext
  }) : /*#__PURE__*/React.createElement(InputGroup, _extends({}, omit(rest, [].concat(omitTriggerPropKeys, usedClassNamePropKeys, calendarOnlyProps)), {
    inside: true,
    size: size,
    onClick: handleClick
  }), /*#__PURE__*/React.createElement(PickerLabel, {
    className: prefix(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["label"]))),
    id: id + "-label"
  }, label), /*#__PURE__*/React.createElement(DateInput, _extends({
    "aria-haspopup": "dialog",
    "aria-invalid": invalidValue,
    "aria-labelledby": label ? id + "-label" : undefined
  }, ariaProps, {
    ref: target,
    id: id,
    value: value,
    format: formatStr,
    placeholder: placeholder ? placeholder : formatStr,
    disabled: disabled,
    onChange: handleInputChange,
    readOnly: readOnly || !editable || loading,
    plaintext: plaintext,
    onKeyDown: handleInputKeyDown
  })), /*#__PURE__*/React.createElement(PickerIndicator, {
    loading: loading,
    caretAs: caretAs,
    onClose: handleClean,
    showCleanButton: showCleanButton
  }))));
});
DatePicker.displayName = 'DatePicker';
DatePicker.propTypes = _extends({}, pickerPropTypes, {
  calendarDefaultDate: PropTypes.instanceOf(Date),
  defaultValue: PropTypes.instanceOf(Date),
  disabledDate: deprecatePropTypeNew(PropTypes.func, 'Use "shouldDisableDate" property instead.'),
  disabledHours: deprecatePropTypeNew(PropTypes.func, 'Use "shouldDisableHour" property instead.'),
  disabledMinutes: deprecatePropTypeNew(PropTypes.func, 'Use "shouldDisableMinute" property instead.'),
  disabledSeconds: deprecatePropTypeNew(PropTypes.func, 'Use "shouldDisableSecond" property instead.'),
  shouldDisableDate: PropTypes.func,
  shouldDisableHour: PropTypes.func,
  shouldDisableMinute: PropTypes.func,
  shouldDisableSecond: PropTypes.func,
  format: PropTypes.string,
  hideHours: PropTypes.func,
  hideMinutes: PropTypes.func,
  hideSeconds: PropTypes.func,
  isoWeek: PropTypes.bool,
  limitEndYear: PropTypes.number,
  limitStartYear: PropTypes.number,
  onChange: PropTypes.func,
  onChangeCalendarDate: PropTypes.func,
  onNextMonth: PropTypes.func,
  onOk: PropTypes.func,
  onPrevMonth: PropTypes.func,
  onSelect: PropTypes.func,
  onToggleMonthDropdown: PropTypes.func,
  onToggleTimeDropdown: PropTypes.func,
  oneTap: PropTypes.bool,
  panelContainerRef: PropTypes.any,
  ranges: PropTypes.array,
  showMeridian: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  value: PropTypes.instanceOf(Date)
});
export default DatePicker;