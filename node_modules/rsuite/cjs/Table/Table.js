'use client';
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireDefault(require("react"));
var _rsuiteTable = require("rsuite-table");
var _utils = require("../utils");
var CustomTable = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var localeProp = props.locale,
    _props$loadAnimation = props.loadAnimation,
    loadAnimation = _props$loadAnimation === void 0 ? true : _props$loadAnimation,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["locale", "loadAnimation"]);
  var _useCustom = (0, _utils.useCustom)('Table', localeProp),
    locale = _useCustom.locale,
    rtl = _useCustom.rtl;
  return /*#__PURE__*/_react.default.createElement(_rsuiteTable.Table, (0, _extends2.default)({}, rest, {
    rtl: rtl,
    ref: ref,
    locale: locale,
    loadAnimation: loadAnimation
  }));
});

/**
 * The `Table` component is used to display data in a table.
 *
 * @see https://rsuitejs.com/components/table/
 */
var Table = Object.assign(CustomTable, {
  /**
   * The `Table.Cell` component  is used to display data in a table cell.
   */
  Cell: _rsuiteTable.Cell,
  /**
   * The `Table.Column` component  is used to define a column in a table.
   */
  Column: _rsuiteTable.Column,
  /**
   * The `Table.HeaderCell` component  is used to define a header cell in a table.
   */
  HeaderCell: _rsuiteTable.HeaderCell,
  /**
   * The `Table.ColumnGroup` component  is used to define a column group in a table.
   */
  ColumnGroup: _rsuiteTable.ColumnGroup
});
var _default = Table;
exports.default = _default;