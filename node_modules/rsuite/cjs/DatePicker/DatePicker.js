'use client';
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
exports.__esModule = true;
exports.default = void 0;
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mapValues = _interopRequireDefault(require("lodash/mapValues"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _delay = _interopRequireDefault(require("lodash/delay"));
var _omit = _interopRequireDefault(require("lodash/omit"));
var _Calendar = _interopRequireDefault(require("@rsuite/icons/legacy/Calendar"));
var _ClockO = _interopRequireDefault(require("@rsuite/icons/legacy/ClockO"));
var _CalendarContainer = _interopRequireDefault(require("../Calendar/CalendarContainer"));
var _useCalendarDate2 = _interopRequireDefault(require("../Calendar/useCalendarDate"));
var _MonthDropdown = require("../Calendar/MonthDropdown");
var _Toolbar = _interopRequireDefault(require("./Toolbar"));
var _Stack = _interopRequireDefault(require("../Stack"));
var _PredefinedRanges = _interopRequireDefault(require("./PredefinedRanges"));
var _utils = require("../utils");
var _dateUtils = require("../utils/dateUtils");
var _Picker = require("../internals/Picker");
var _OverlayTrigger = require("../internals/Overlay/OverlayTrigger");
var _DateInput = _interopRequireDefault(require("../DateInput"));
var _InputGroup = _interopRequireDefault(require("../InputGroup"));
var _propTypes2 = require("../internals/propTypes");
var _utils2 = require("../Calendar/utils");
var _utils3 = require("./utils");
var _templateObject;
/**
 * A date picker allows users to select a date from a calendar.
 *
 * @see https://rsuitejs.com/components/date-picker
 */
var DatePicker = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
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
    restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "className", "classPrefix", "calendarDefaultDate", "cleanable", "editable", "defaultValue", "disabled", "readOnly", "plaintext", "format", "id", "isoWeek", "limitEndYear", "limitStartYear", "locale", "loading", "label", "menuClassName", "menuStyle", "appearance", "placement", "oneTap", "placeholder", "ranges", "value", "showMeridian", "showWeekNumbers", "style", "size", "caretAs", "disabledDate", "disabledHours", "disabledMinutes", "disabledSeconds", "shouldDisableDate", "shouldDisableHour", "shouldDisableMinute", "shouldDisableSecond", "onChange", "onChangeCalendarDate", "onClean", "onClose", "onEntered", "onExited", "onNextMonth", "onOk", "onOpen", "onPrevMonth", "onSelect", "onToggleMonthDropdown", "onToggleTimeDropdown", "onShortcutClick"]);
  var id = (0, _utils.useUniqueId)('rs-', idProp);
  var _usePickerRef = (0, _Picker.usePickerRef)(ref),
    trigger = _usePickerRef.trigger,
    root = _usePickerRef.root,
    target = _usePickerRef.target,
    overlay = _usePickerRef.overlay;
  var _useCustom = (0, _utils.useCustom)('DatePicker', overrideLocale),
    locale = _useCustom.locale,
    formatDate = _useCustom.formatDate;
  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
    merge = _useClassNames.merge,
    prefix = _useClassNames.prefix;
  var _useControlled = (0, _utils.useControlled)(valueProp, defaultValue),
    value = _useControlled[0],
    setValue = _useControlled[1];
  var _useCalendarDate = (0, _useCalendarDate2.default)(value, calendarDefaultDate),
    calendarDate = _useCalendarDate.calendarDate,
    setCalendarDate = _useCalendarDate.setCalendarDate,
    resetCalendarDate = _useCalendarDate.resetCalendarDate;
  var _useState = (0, _react.useState)(false),
    showMonthDropdown = _useState[0],
    setShowMonthDropdown = _useState[1]; // Show only the calendar month panel. formatStr = 'yyyy-MM'
  var onlyShowMonth = (0, _dateUtils.shouldRenderMonth)(formatStr) && !(0, _dateUtils.shouldRenderDate)(formatStr);
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
    if (!(0, _dateUtils.isValid)(value)) {
      return true;
    } else if (value && isDateDisabled(value)) {
      return true;
    }
    return false;
  };

  /**
   * Switch to the callback triggered after the next month.
   */
  var handleMoveForward = (0, _utils.useEventCallback)(function (nextPageDate) {
    setCalendarDate(nextPageDate);
    onNextMonth === null || onNextMonth === void 0 ? void 0 : onNextMonth(nextPageDate);
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(nextPageDate);
  });

  /**
   * Switch to the callback triggered after the previous month.
   */
  var handleMoveBackward = (0, _utils.useEventCallback)(function (nextPageDate) {
    setCalendarDate(nextPageDate);
    onPrevMonth === null || onPrevMonth === void 0 ? void 0 : onPrevMonth(nextPageDate);
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(nextPageDate);
  });

  /**
   * The callback triggered when the date changes.
   */
  var handleDateChange = (0, _utils.useEventCallback)(function (nextValue, event) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(nextValue, event);
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(nextValue, event);
  });

  /**
   *  A callback triggered when the time on the calendar changes.
   */
  var handleChangeTime = (0, _utils.useEventCallback)(function (nextPageTime) {
    setCalendarDate(nextPageTime);
    handleDateChange(nextPageTime);
  });
  var handleClose = (0, _utils.useEventCallback)(function () {
    var _trigger$current, _trigger$current$clos;
    (_trigger$current = trigger.current) === null || _trigger$current === void 0 ? void 0 : (_trigger$current$clos = _trigger$current.close) === null || _trigger$current$clos === void 0 ? void 0 : _trigger$current$clos.call(_trigger$current);
  });

  /**
   * The callback triggered when PM/AM is switched.
   */
  var handleToggleMeridian = (0, _utils.useEventCallback)(function () {
    var hours = (0, _dateUtils.getHours)(calendarDate);
    var nextHours = hours >= 12 ? hours - 12 : hours + 12;
    var nextDate = (0, _dateUtils.setHours)(calendarDate, nextHours);
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
  var handleShortcutPageDate = (0, _utils.useEventCallback)(function (range, closeOverlay, event) {
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
    var ariaLabel = (0, _utils2.getAriaLabel)(date, formatStr, formatDate);
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
    (0, _delay.default)(function () {
      var container = getOverlayContainer();
      var selectedElement = container === null || container === void 0 ? void 0 : container.querySelector('[aria-selected="true"]');
      selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.focus();
    }, 1);
  };

  /**
   * Focus on the input element
   */
  var focusTargetInput = (0, _utils.useEventCallback)(function () {
    (0, _delay.default)(function () {
      var _target$current;
      return (_target$current = target.current) === null || _target$current === void 0 ? void 0 : _target$current.focus();
    }, 1);
  });

  /**
   * The callback triggered after clicking the OK button.
   */
  var handleOK = (0, _utils.useEventCallback)(function (event) {
    updateValue(event);
    onOk === null || onOk === void 0 ? void 0 : onOk(calendarDate, event);
    focusTargetInput();
  });

  /**
   * Callback after clicking the clear button.
   */

  var handleClean = (0, _utils.useEventCallback)(function (event) {
    updateValue(event, null);
    resetCalendarDate(null);
    onClean === null || onClean === void 0 ? void 0 : onClean(event);
    event.stopPropagation();
  });
  var handlePickerPopupKeyDown = (0, _utils.useEventCallback)(function (event) {
    var delta = 0;
    var step = showMonth ? 6 : 7;
    var changeDateFunc = showMonth ? _dateUtils.addMonths : _dateUtils.addDays;
    (0, _Picker.onMenuKeyDown)(event, {
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
  var handleToggleMonthDropdown = (0, _utils.useEventCallback)(function (toggle) {
    onToggleMonthDropdown === null || onToggleMonthDropdown === void 0 ? void 0 : onToggleMonthDropdown(toggle);
    setShowMonthDropdown(toggle);
  });
  var handleClick = (0, _utils.useEventCallback)(function () {
    if (editable) {
      return;
    }
    focusSelectedDate();
  });

  /**
   * Callback after the date is selected.
   */
  var handleSelect = (0, _utils.useEventCallback)(function (nextValue, event, updatableValue) {
    if (updatableValue === void 0) {
      updatableValue = true;
    }
    setCalendarDate(
    // Determine whether the current value contains time, if not, use calendarDate.
    (0, _dateUtils.shouldRenderTime)(formatStr) ? nextValue : (0, _dateUtils.copyTime)({
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
  var handleChangeMonth = (0, _utils.useEventCallback)(function (nextPageDate, event) {
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
  var handleInputChange = (0, _utils.useEventCallback)(function (value, event) {
    if (!isErrorValue(value)) {
      handleSelect(value, event);
    }
    updateValue(event, value, false);
  });
  var handleInputKeyDown = (0, _utils.useEventCallback)(function (event) {
    (0, _Picker.onMenuKeyDown)(event, {
      esc: handleClose,
      enter: function enter() {
        var _trigger$current2;
        var _ref = ((_trigger$current2 = trigger.current) === null || _trigger$current2 === void 0 ? void 0 : _trigger$current2.getState()) || {},
          open = _ref.open;
        if (open) {
          if ((0, _dateUtils.isValid)(calendarDate) && !isDateDisabled(calendarDate)) {
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
    var allowTime = (0, _dateUtils.disabledTime)(props, date);
    return allowDate || allowTime;
  };

  /**
   * Whether "OK" button is disabled
   *
   * - If format is date, disable ok button if selected date is disabled
   * - If format is month, disable ok button if all dates in the month of selected date are disabled
   */
  var isOKButtonDisabled = function isOKButtonDisabled(selectedDate) {
    if ((0, _dateUtils.shouldRenderMonth)(formatStr) && !(0, _dateUtils.shouldRenderDate)(formatStr)) {
      return (0, _MonthDropdown.isEveryDateInMonth)(selectedDate.getFullYear(), selectedDate.getMonth(), disabledToolbarHandle);
    }
    return disabledToolbarHandle(selectedDate);
  };
  var calendarProps = (0, _react.useMemo)(function () {
    return (0, _mapValues.default)((0, _pick.default)(props, _dateUtils.calendarOnlyProps), function (disabledOrHiddenTimeFunc) {
      return function (next, date) {
        var _disabledOrHiddenTime;
        return (_disabledOrHiddenTime = disabledOrHiddenTimeFunc === null || disabledOrHiddenTimeFunc === void 0 ? void 0 : disabledOrHiddenTimeFunc(next, date)) !== null && _disabledOrHiddenTime !== void 0 ? _disabledOrHiddenTime : false;
      };
    });
  }, [props]);
  var _splitRanges = (0, _utils3.splitRanges)(ranges),
    sideRanges = _splitRanges.sideRanges,
    bottomRanges = _splitRanges.bottomRanges;
  var renderCalendarOverlay = function renderCalendarOverlay(positionProps, speakerRef) {
    var left = positionProps.left,
      top = positionProps.top,
      className = positionProps.className;
    var classes = merge(menuClassName, className);
    var styles = (0, _extends2.default)({}, menuStyle, {
      left: left,
      top: top
    });
    return /*#__PURE__*/_react.default.createElement(_Picker.PickerPopup, {
      role: "dialog",
      "aria-labelledby": label ? id + "-label" : undefined,
      tabIndex: -1,
      className: classes,
      ref: (0, _utils.mergeRefs)(overlay, speakerRef),
      style: styles,
      target: trigger,
      onKeyDown: handlePickerPopupKeyDown
    }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
      alignItems: "flex-start"
    }, sideRanges.length > 0 && /*#__PURE__*/_react.default.createElement(_PredefinedRanges.default, {
      direction: "column",
      spacing: 0,
      className: prefix('date-predefined'),
      ranges: sideRanges,
      calendarDate: calendarDate,
      locale: locale,
      disabledShortcut: disabledToolbarHandle,
      onShortcutClick: handleShortcutPageDate
    }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CalendarContainer.default, (0, _extends2.default)({}, calendarProps, {
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
    })), /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
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
  var hasValue = (0, _dateUtils.isValid)(value);
  var _usePickerClassName = (0, _Picker.usePickerClassName)((0, _extends2.default)({}, props, {
      classPrefix: classPrefix,
      name: 'date',
      appearance: appearance,
      hasValue: hasValue,
      cleanable: cleanable
    })),
    classes = _usePickerClassName[0],
    usedClassNamePropKeys = _usePickerClassName[1];
  var caretAs = (0, _react.useMemo)(function () {
    if (caretAsProp === null) {
      return null;
    }
    return caretAsProp || ((0, _dateUtils.shouldOnlyRenderTime)(formatStr) ? _ClockO.default : _Calendar.default);
  }, [caretAsProp, formatStr]);
  var handleTriggerClose = (0, _utils.useEventCallback)(function (cause) {
    // Unless overlay is closing on user clicking "OK" button,
    // reset the selected date on calendar panel
    if (cause !== _OverlayTrigger.OverlayCloseCause.ImperativeHandle) {
      resetCalendarDate();
    }
    setShowMonthDropdown(false);
  });
  var showCleanButton = cleanable && hasValue && !readOnly;
  var _partitionHTMLProps = (0, _utils.partitionHTMLProps)(restProps, {
      htmlProps: [],
      includeAria: true
    }),
    ariaProps = _partitionHTMLProps[0],
    rest = _partitionHTMLProps[1];
  var invalidValue = value && isErrorValue(value);
  return /*#__PURE__*/_react.default.createElement(_Picker.PickerToggleTrigger, {
    trigger: "active",
    pickerProps: (0, _pick.default)(props, _Picker.pickTriggerPropKeys),
    ref: trigger,
    placement: placement,
    onClose: handleTriggerClose,
    onEntered: (0, _utils.createChainedFunction)(onOpen, onEntered),
    onExited: (0, _utils.createChainedFunction)(onClose, onExited),
    speaker: renderCalendarOverlay
  }, /*#__PURE__*/_react.default.createElement(Component, {
    className: merge(className, classes, (_merge = {}, _merge[prefix('error')] = invalidValue, _merge)),
    style: style,
    ref: root
  }, plaintext ? /*#__PURE__*/_react.default.createElement(_DateInput.default, {
    value: value,
    format: formatStr,
    plaintext: plaintext
  }) : /*#__PURE__*/_react.default.createElement(_InputGroup.default, (0, _extends2.default)({}, (0, _omit.default)(rest, [].concat(_Picker.omitTriggerPropKeys, usedClassNamePropKeys, _dateUtils.calendarOnlyProps)), {
    inside: true,
    size: size,
    onClick: handleClick
  }), /*#__PURE__*/_react.default.createElement(_Picker.PickerLabel, {
    className: prefix(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["label"]))),
    id: id + "-label"
  }, label), /*#__PURE__*/_react.default.createElement(_DateInput.default, (0, _extends2.default)({
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
  })), /*#__PURE__*/_react.default.createElement(_Picker.PickerIndicator, {
    loading: loading,
    caretAs: caretAs,
    onClose: handleClean,
    showCleanButton: showCleanButton
  }))));
});
DatePicker.displayName = 'DatePicker';
DatePicker.propTypes = (0, _extends2.default)({}, _Picker.pickerPropTypes, {
  calendarDefaultDate: _propTypes.default.instanceOf(Date),
  defaultValue: _propTypes.default.instanceOf(Date),
  disabledDate: (0, _propTypes2.deprecatePropTypeNew)(_propTypes.default.func, 'Use "shouldDisableDate" property instead.'),
  disabledHours: (0, _propTypes2.deprecatePropTypeNew)(_propTypes.default.func, 'Use "shouldDisableHour" property instead.'),
  disabledMinutes: (0, _propTypes2.deprecatePropTypeNew)(_propTypes.default.func, 'Use "shouldDisableMinute" property instead.'),
  disabledSeconds: (0, _propTypes2.deprecatePropTypeNew)(_propTypes.default.func, 'Use "shouldDisableSecond" property instead.'),
  shouldDisableDate: _propTypes.default.func,
  shouldDisableHour: _propTypes.default.func,
  shouldDisableMinute: _propTypes.default.func,
  shouldDisableSecond: _propTypes.default.func,
  format: _propTypes.default.string,
  hideHours: _propTypes.default.func,
  hideMinutes: _propTypes.default.func,
  hideSeconds: _propTypes.default.func,
  isoWeek: _propTypes.default.bool,
  limitEndYear: _propTypes.default.number,
  limitStartYear: _propTypes.default.number,
  onChange: _propTypes.default.func,
  onChangeCalendarDate: _propTypes.default.func,
  onNextMonth: _propTypes.default.func,
  onOk: _propTypes.default.func,
  onPrevMonth: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onToggleMonthDropdown: _propTypes.default.func,
  onToggleTimeDropdown: _propTypes.default.func,
  oneTap: _propTypes.default.bool,
  panelContainerRef: _propTypes.default.any,
  ranges: _propTypes.default.array,
  showMeridian: _propTypes.default.bool,
  showWeekNumbers: _propTypes.default.bool,
  value: _propTypes.default.instanceOf(Date)
});
var _default = DatePicker;
exports.default = _default;