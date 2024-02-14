'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useMemo } from 'react';
import CheckTreePicker from '../CheckTreePicker';
import TreeContext from '../Tree/TreeContext';
/**
 * The `CheckTree` component is used for selecting multiple options which are organized in a tree structure.
 * @see https://rsuitejs.com/components/check-tree
 */
var CheckTree = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var contextValue = useMemo(function () {
    return {
      inline: true
    };
  }, []);
  return /*#__PURE__*/React.createElement(TreeContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(CheckTreePicker, _extends({
    ref: ref
  }, props)));
});
CheckTree.displayName = 'CheckTree';
export default CheckTree;