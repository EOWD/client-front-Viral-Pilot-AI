'use client';
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dateUtils = require("../utils/dateUtils");
var _CalendarContainer = _interopRequireDefault(require("../Calendar/CalendarContainer"));
var _utils = require("../utils");
var Calendar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$as = props.as,
    Component = _props$as === void 0 ? _CalendarContainer.default : _props$as,
    _props$calendarDate = props.calendarDate,
    calendarDate = _props$calendarDate === void 0 ? [new Date(), (0, _dateUtils.addMonths)(new Date(), 1)] : _props$calendarDate,
    _props$format = props.format,
    format = _props$format === void 0 ? 'yyyy-MM-dd' : _props$format,
    disabledDate = props.disabledDate,
    _props$index = props.index,
    index = _props$index === void 0 ? 0 : _props$index,
    limitEndYear = props.limitEndYear,
    limitStartYear = props.limitStartYear,
    onChangeCalendarMonth = props.onChangeCalendarMonth,
    onChangeCalendarTime = props.onChangeCalendarTime,
    onToggleMeridian = props.onToggleMeridian,
    onSelect = props.onSelect,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "calendarDate", "format", "disabledDate", "index", "limitEndYear", "limitStartYear", "onChangeCalendarMonth", "onChangeCalendarTime", "onToggleMeridian", "onSelect", "value"]);
  var onMoveForward = (0, _utils.useEventCallback)(function (nextPageDate) {
    onChangeCalendarMonth === null || onChangeCalendarMonth === void 0 ? void 0 : onChangeCalendarMonth(index, nextPageDate);
  });
  var onMoveBackward = (0, _utils.useEventCallback)(function (nextPageDate) {
    onChangeCalendarMonth === null || onChangeCalendarMonth === void 0 ? void 0 : onChangeCalendarMonth(index, nextPageDate);
  });
  var handleSelect = (0, _utils.useEventCallback)(function (date, event) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(index, date, event);
  });
  var handleChangeMonth = (0, _utils.useEventCallback)(function (nextPageDate) {
    onChangeCalendarMonth === null || onChangeCalendarMonth === void 0 ? void 0 : onChangeCalendarMonth(index, nextPageDate);
  });
  var handleChangeTime = (0, _utils.useEventCallback)(function (nextPageDate) {
    onChangeCalendarTime === null || onChangeCalendarTime === void 0 ? void 0 : onChangeCalendarTime(index, nextPageDate);
  });
  var handleToggleMeridian = (0, _utils.useEventCallback)(function (event) {
    onToggleMeridian(index, event);
  });
  var getCalendarDate = function getCalendarDate() {
    return calendarDate[index];
  };
  var handleMoveForward = (0, _utils.useEventCallback)(function () {
    onMoveForward === null || onMoveForward === void 0 ? void 0 : onMoveForward((0, _dateUtils.addMonths)(getCalendarDate(), 1));
  });
  var handleMoveBackward = (0, _utils.useEventCallback)(function () {
    onMoveBackward === null || onMoveBackward === void 0 ? void 0 : onMoveBackward((0, _dateUtils.addMonths)(getCalendarDate(), -1));
  });
  var disabledMonth = function disabledMonth(date) {
    return disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date, value, _utils.DATERANGE_DISABLED_TARGET.CALENDAR);
  };
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    "data-testid": "calendar-" + (index === 0 ? 'start' : 'end')
  }, rest, {
    format: format,
    dateRange: value,
    disabledDate: disabledMonth,
    index: index,
    limitEndYear: limitEndYear,
    limitStartYear: limitStartYear,
    onChangeMonth: handleChangeMonth,
    onChangeTime: handleChangeTime,
    onMoveBackward: handleMoveBackward,
    onMoveForward: handleMoveForward,
    onToggleMeridian: handleToggleMeridian,
    onSelect: handleSelect,
    calendarDate: getCalendarDate(),
    ref: ref
  }));
});
Calendar.displayName = 'DateRangePicker.Calendar';
Calendar.propTypes = {
  value: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  hoverValue: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  calendarDate: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  index: _propTypes.default.number,
  format: _propTypes.default.string,
  isoWeek: _propTypes.default.bool,
  limitEndYear: _propTypes.default.number,
  limitStartYear: _propTypes.default.number,
  classPrefix: _propTypes.default.string,
  disabledDate: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onMouseMove: _propTypes.default.func,
  onChangeCalendarMonth: _propTypes.default.func
};
var _default = Calendar;
exports.default = _default;