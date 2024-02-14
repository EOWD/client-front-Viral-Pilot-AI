'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import { Table as RsTable, Column, Cell, HeaderCell, ColumnGroup } from 'rsuite-table';
import { useCustom } from '../utils';
var CustomTable = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var localeProp = props.locale,
    _props$loadAnimation = props.loadAnimation,
    loadAnimation = _props$loadAnimation === void 0 ? true : _props$loadAnimation,
    rest = _objectWithoutPropertiesLoose(props, ["locale", "loadAnimation"]);
  var _useCustom = useCustom('Table', localeProp),
    locale = _useCustom.locale,
    rtl = _useCustom.rtl;
  return /*#__PURE__*/React.createElement(RsTable, _extends({}, rest, {
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
  Cell: Cell,
  /**
   * The `Table.Column` component  is used to define a column in a table.
   */
  Column: Column,
  /**
   * The `Table.HeaderCell` component  is used to define a header cell in a table.
   */
  HeaderCell: HeaderCell,
  /**
   * The `Table.ColumnGroup` component  is used to define a column group in a table.
   */
  ColumnGroup: ColumnGroup
});
export default Table;