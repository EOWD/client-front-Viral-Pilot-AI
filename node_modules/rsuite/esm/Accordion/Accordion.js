'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PanelGroup from '../PanelGroup';
import Panel from '../Panel';
/**
 * The `Accordion` component is used to display content that can be collapsed.
 * @see https://rsuitejs.com/components/accordion
 */
var Accordion = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(PanelGroup, _extends({
    accordion: true,
    ref: ref
  }, props));
});
Accordion.Panel = Panel;
Accordion.displayName = 'Accordion';
export default Accordion;