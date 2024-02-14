'use client';
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _hasClass = _interopRequireDefault(require("dom-lib/hasClass"));
var _ArrowDown = _interopRequireDefault(require("@rsuite/icons/legacy/ArrowDown"));
var _Spinner = _interopRequireDefault(require("@rsuite/icons/legacy/Spinner"));
var _utils = require("../utils");
var _treeUtils = require("../utils/treeUtils");
var TreeNode = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
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
    rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "rtl", "label", "layer", "style", "active", "loading", "nodeData", "className", "classPrefix", "disabled", "visible", "draggable", "expand", "focus", "hasChildren", "dragging", "dragOver", "dragOverTop", "dragOverBottom", "onSelect", "onDragStart", "onDragOver", "onDragEnter", "onDragLeave", "onDragEnd", "onDrop", "onExpand", "renderTreeIcon", "renderTreeNode"]);
  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
    prefix = _useClassNames.prefix,
    merge = _useClassNames.merge,
    withClassPrefix = _useClassNames.withClassPrefix;
  var handleExpand = (0, _utils.useEventCallback)(function (event) {
    var _event$nativeEvent, _event$nativeEvent$st;
    // stop propagation when using custom loading icon
    event === null || event === void 0 ? void 0 : (_event$nativeEvent = event.nativeEvent) === null || _event$nativeEvent === void 0 ? void 0 : (_event$nativeEvent$st = _event$nativeEvent.stopImmediatePropagation) === null || _event$nativeEvent$st === void 0 ? void 0 : _event$nativeEvent$st.call(_event$nativeEvent);
    onExpand === null || onExpand === void 0 ? void 0 : onExpand(nodeData);
  });
  var handleSelect = (0, _utils.useEventCallback)(function (event) {
    if (disabled) {
      return;
    }
    if (event.target instanceof HTMLElement) {
      if ((0, _hasClass.default)(event.target.parentNode, prefix('expand-icon-wrapper'))) {
        return;
      }
    }
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(nodeData, event);
  });
  var handleDragStart = (0, _utils.useEventCallback)(function (event) {
    onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(nodeData, event);
  });
  var handleDragEnter = (0, _utils.useEventCallback)(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onDragEnter === null || onDragEnter === void 0 ? void 0 : onDragEnter(nodeData, event);
  });
  var handleDragOver = (0, _utils.useEventCallback)(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver(nodeData, event);
  });
  var handleDragLeave = (0, _utils.useEventCallback)(function (event) {
    event.stopPropagation();
    onDragLeave === null || onDragLeave === void 0 ? void 0 : onDragLeave(nodeData, event);
  });
  var handleDragEnd = (0, _utils.useEventCallback)(function (event) {
    event.stopPropagation();
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(nodeData, event);
  });
  var handleDrop = (0, _utils.useEventCallback)(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onDrop === null || onDrop === void 0 ? void 0 : onDrop(nodeData, event);
  });
  var renderIcon = function renderIcon() {
    var classes = prefix('expand-icon', 'icon', {
      expanded: expand
    });
    var expandIcon = /*#__PURE__*/_react.default.createElement(_ArrowDown.default, {
      className: classes
    });
    if (loading) {
      expandIcon = /*#__PURE__*/_react.default.createElement("div", {
        className: prefix('loading-icon')
      }, /*#__PURE__*/_react.default.createElement(_Spinner.default, {
        spin: true
      }));
    }
    if (nodeData !== undefined && typeof renderTreeIcon === 'function') {
      var customIcon = renderTreeIcon(nodeData);
      expandIcon = customIcon !== null ? /*#__PURE__*/_react.default.createElement("div", {
        className: prefix('custom-icon')
      }, customIcon) : expandIcon;
    }
    return hasChildren ? /*#__PURE__*/_react.default.createElement("div", {
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
    return /*#__PURE__*/_react.default.createElement("span", {
      className: prefix('label'),
      title: (0, _treeUtils.stringifyTreeNodeLabel)(label),
      "data-layer": layer,
      "data-key": (nodeData === null || nodeData === void 0 ? void 0 : nodeData.refKey) || '',
      role: "button",
      tabIndex: -1,
      onClick: handleSelect
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: contentClasses
    }, renderTreeNode ? renderTreeNode(nodeData) : label));
  };
  var classes = merge(className, withClassPrefix({
    disabled: disabled,
    active: active,
    'text-muted': disabled,
    focus: focus
  }));
  var styles = (0, _extends2.default)({}, style, (0, _treeUtils.getTreeNodeIndent)(rtl, layer - 1));
  return visible ? /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
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
var _default = TreeNode;
exports.default = _default;