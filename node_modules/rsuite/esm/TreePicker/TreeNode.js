'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { forwardRef } from 'react';
import hasClass from 'dom-lib/hasClass';
import ArrowDown from '@rsuite/icons/legacy/ArrowDown';
import Spinner from '@rsuite/icons/legacy/Spinner';
import { useClassNames, useEventCallback } from '../utils';
import { getTreeNodeIndent, stringifyTreeNodeLabel } from '../utils/treeUtils';
var TreeNode = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
    Component = _ref$as === void 0 ? 'div' : _ref$as,
    rtl = _ref.rtl,
    label = _ref.label,
    layer = _ref.layer,
    style = _ref.style,
    active = _ref.active,
    loading = _ref.loading,
    nodeData = _ref.nodeData,
    className = _ref.className,
    _ref$classPrefix = _ref.classPrefix,
    classPrefix = _ref$classPrefix === void 0 ? 'tree-node' : _ref$classPrefix,
    disabled = _ref.disabled,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? true : _ref$visible,
    draggable = _ref.draggable,
    expand = _ref.expand,
    focus = _ref.focus,
    hasChildren = _ref.hasChildren,
    dragging = _ref.dragging,
    dragOver = _ref.dragOver,
    dragOverTop = _ref.dragOverTop,
    dragOverBottom = _ref.dragOverBottom,
    onSelect = _ref.onSelect,
    onDragStart = _ref.onDragStart,
    onDragOver = _ref.onDragOver,
    onDragEnter = _ref.onDragEnter,
    onDragLeave = _ref.onDragLeave,
    onDragEnd = _ref.onDragEnd,
    onDrop = _ref.onDrop,
    onExpand = _ref.onExpand,
    renderTreeIcon = _ref.renderTreeIcon,
    renderTreeNode = _ref.renderTreeNode,
    rest = _objectWithoutPropertiesLoose(_ref, ["as", "rtl", "label", "layer", "style", "active", "loading", "nodeData", "className", "classPrefix", "disabled", "visible", "draggable", "expand", "focus", "hasChildren", "dragging", "dragOver", "dragOverTop", "dragOverBottom", "onSelect", "onDragStart", "onDragOver", "onDragEnter", "onDragLeave", "onDragEnd", "onDrop", "onExpand", "renderTreeIcon", "renderTreeNode"]);
  var _useClassNames = useClassNames(classPrefix),
    prefix = _useClassNames.prefix,
    merge = _useClassNames.merge,
    withClassPrefix = _useClassNames.withClassPrefix;
  var handleExpand = useEventCallback(function (event) {
    var _event$nativeEvent, _event$nativeEvent$st;
    // stop propagation when using custom loading icon
    event === null || event === void 0 ? void 0 : (_event$nativeEvent = event.nativeEvent) === null || _event$nativeEvent === void 0 ? void 0 : (_event$nativeEvent$st = _event$nativeEvent.stopImmediatePropagation) === null || _event$nativeEvent$st === void 0 ? void 0 : _event$nativeEvent$st.call(_event$nativeEvent);
    onExpand === null || onExpand === void 0 ? void 0 : onExpand(nodeData);
  });
  var handleSelect = useEventCallback(function (event) {
    if (disabled) {
      return;
    }
    if (event.target instanceof HTMLElement) {
      if (hasClass(event.target.parentNode, prefix('expand-icon-wrapper'))) {
        return;
      }
    }
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(nodeData, event);
  });
  var handleDragStart = useEventCallback(function (event) {
    onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(nodeData, event);
  });
  var handleDragEnter = useEventCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onDragEnter === null || onDragEnter === void 0 ? void 0 : onDragEnter(nodeData, event);
  });
  var handleDragOver = useEventCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver(nodeData, event);
  });
  var handleDragLeave = useEventCallback(function (event) {
    event.stopPropagation();
    onDragLeave === null || onDragLeave === void 0 ? void 0 : onDragLeave(nodeData, event);
  });
  var handleDragEnd = useEventCallback(function (event) {
    event.stopPropagation();
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(nodeData, event);
  });
  var handleDrop = useEventCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onDrop === null || onDrop === void 0 ? void 0 : onDrop(nodeData, event);
  });
  var renderIcon = function renderIcon() {
    var classes = prefix('expand-icon', 'icon', {
      expanded: expand
    });
    var expandIcon = /*#__PURE__*/React.createElement(ArrowDown, {
      className: classes
    });
    if (loading) {
      expandIcon = /*#__PURE__*/React.createElement("div", {
        className: prefix('loading-icon')
      }, /*#__PURE__*/React.createElement(Spinner, {
        spin: true
      }));
    }
    if (nodeData !== undefined && typeof renderTreeIcon === 'function') {
      var customIcon = renderTreeIcon(nodeData);
      expandIcon = customIcon !== null ? /*#__PURE__*/React.createElement("div", {
        className: prefix('custom-icon')
      }, customIcon) : expandIcon;
    }
    return hasChildren ? /*#__PURE__*/React.createElement("div", {
      role: "button",
      tabIndex: -1,
      "data-ref": nodeData.refKey,
      className: prefix('expand-icon-wrapper'),
      onClick: handleExpand
    }, expandIcon) : null;
  };
  var renderLabel = function renderLabel() {
    var contentClasses = prefix('label-content', {
      dragging: dragging,
      'drag-over': dragOver,
      'drag-over-top': dragOverTop,
      'drag-over-bottom': dragOverBottom
    });
    return /*#__PURE__*/React.createElement("span", {
      className: prefix('label'),
      title: stringifyTreeNodeLabel(label),
      "data-layer": layer,
      "data-key": (nodeData === null || nodeData === void 0 ? void 0 : nodeData.refKey) || '',
      role: "button",
      tabIndex: -1,
      onClick: handleSelect
    }, /*#__PURE__*/React.createElement("span", {
      className: contentClasses
    }, renderTreeNode ? renderTreeNode(nodeData) : label));
  };
  var classes = merge(className, withClassPrefix({
    disabled: disabled,
    active: active,
    'text-muted': disabled,
    focus: focus
  }));
  var styles = _extends({}, style, getTreeNodeIndent(rtl, layer - 1));
  return visible ? /*#__PURE__*/React.createElement(Component, _extends({
    role: "treeitem"
  }, rest, {
    "aria-expanded": expand,
    "aria-label": label,
    "aria-level": layer,
    "aria-disabled": disabled,
    "aria-selected": active,
    style: styles,
    className: classes,
    ref: ref,
    draggable: draggable,
    onDragStart: handleDragStart,
    onDragEnter: handleDragEnter,
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDragEnd: handleDragEnd,
    onDrop: handleDrop
  }), renderIcon(), renderLabel()) : null;
});
TreeNode.displayName = 'TreePickerNode';
export default TreeNode;