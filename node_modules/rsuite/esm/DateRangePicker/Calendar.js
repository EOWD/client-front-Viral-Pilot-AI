'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { addMonths } from '../utils/dateUtils';
import CalendarCore from '../Calendar/CalendarContainer';
import { DATERANGE_DISABLED_TARGET, useEventCallback } from '../utils';
var Calendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
    Component = _props$as === void 0 ? CalendarCore : _props$as,
    _props$calendarDate = props.calendarDate,
    calendarDate = _props$calendarDate === void 0 ? [new Date(), addMonths(new Date(), 1)] : _props$calendarDate,
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
    rest = _objectWithoutPropertiesLoose(props, ["as", "calendarDate", "format", "disabledDate", "index", "limitEndYear", "limitStartYear", "onChangeCalendarMonth", "onChangeCalendarTime", "onToggleMeridian", "onSelect", "value"]);
  var onMoveForward = useEventCallback(function (nextPageDate) {
    onChangeCalendarMonth === null || onChangeCalendarMonth === void 0 ? void 0 : onChangeCalendarMonth(index, nextPageDate);
  });
  var onMoveBackward = useEventCallback(function (nextPageDate) {
    onChangeCalendarMonth === null || onChangeCalendarMonth === void 0 ? void 0 : onChangeCalendarMonth(index, nextPageDate);
  });
  var handleSelect = useEventCallback(function (date, event) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(index, date, event);
  });
  var handleChangeMonth = useEventCallback(function (nextPageDate) {
    onChangeCalendarMonth === null || onChangeCalendarMonth === void 0 ? void 0 : onChangeCalendarMonth(index, nextPageDate);
  });
  var handleChangeTime = useEventCallback(function (nextPageDate) {
    onChangeCalendarTime === null || onChangeCalendarTime === void 0 ? void 0 : onChangeCalendarTime(index, nextPageDate);
  });
  var handleToggleMeridian = useEventCallback(function (event) {
    onToggleMeridian(index, event);
  });
  var getCalendarDate = function getCalendarDate() {
    return calendarDate[index];
  };
  var handleMoveForward = useEventCallback(function () {
    onMoveForward === null || onMoveForward === void 0 ? void 0 : onMoveForward(addMonths(getCalendarDate(), 1));
  });
  var handleMoveBackward = useEventCallback(function () {
    onMoveBackward === null || onMoveBackward === void 0 ? void 0 : onMoveBackward(addMonths(getCalendarDate(), -1));
  });
  var disabledMonth = function disabledMonth(date) {
    return disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date, value, DATERANGE_DISABLED_TARGET.CALENDAR);
  };
  return /*#__PURE__*/React.createElement(Component, _extends({
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
  value: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  hoverValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  calendarDate: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  index: PropTypes.number,
  format: PropTypes.string,
  isoWeek: PropTypes.bool,
  limitEndYear: PropTypes.number,
  limitStartYear: PropTypes.number,
  classPrefix: PropTypes.string,
  disabledDate: PropTypes.func,
  onSelect: PropTypes.func,
  onMouseMove: PropTypes.func,
  onChangeCalendarMonth: PropTypes.func
};
export default Calendar;