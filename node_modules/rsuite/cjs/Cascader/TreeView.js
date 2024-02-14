'use client';
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _Spinner = _interopRequireDefault(require("@rsuite/icons/legacy/Spinner"));
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _isNil = _interopRequireDefault(require("lodash/isNil"));
var _utils = require("../utils");
var _Picker = require("../internals/Picker");
var _AngleLeft = _interopRequireDefault(require("@rsuite/icons/legacy/AngleLeft"));
var _AngleRight = _interopRequireDefault(require("@rsuite/icons/legacy/AngleRight"));
var _getPosition = _interopRequireDefault(require("dom-lib/getPosition"));
var _scrollTop = _interopRequireDefault(require("dom-lib/scrollTop"));
var emptyArray = [];
var TreeView = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$as = props.as,
    Component = _props$as === void 0 ? 'div' : _props$as,
    activeItemValue = props.activeItemValue,
    classPrefix = props.classPrefix,
    className = props.className,
    _props$childrenKey = props.childrenKey,
    childrenKey = _props$childrenKey === void 0 ? 'children' : _props$childrenKey,
    _props$disabledItemVa = props.disabledItemValues,
    disabledItemValues = _props$disabledItemVa === void 0 ? emptyArray : _props$disabledItemVa,
    _props$menuWidth = props.menuWidth,
    menuWidth = _props$menuWidth === void 0 ? 120 : _props$menuWidth,
    _props$menuHeight = props.menuHeight,
    menuHeight = _props$menuHeight === void 0 ? 200 : _props$menuHeight,
    _props$valueKey = props.valueKey,
    valueKey = _props$valueKey === void 0 ? 'value' : _props$valueKey,
    _props$cascadeData = props.cascadeData,
    cascadeData = _props$cascadeData === void 0 ? emptyArray : _props$cascadeData,
    _props$cascadePaths = props.cascadePaths,
    cascadePaths = _props$cascadePaths === void 0 ? emptyArray : _props$cascadePaths,
    loadingItemsSet = props.loadingItemsSet,
    _props$labelKey = props.labelKey,
    labelKey = _props$labelKey === void 0 ? 'label' : _props$labelKey,
    style = props.style,
    renderMenu = props.renderMenu,
    renderMenuItem = props.renderMenuItem,
    onSelect = props.onSelect,
    rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "activeItemValue", "classPrefix", "className", "childrenKey", "disabledItemValues", "menuWidth", "menuHeight", "valueKey", "cascadeData", "cascadePaths", "loadingItemsSet", "labelKey", "style", "renderMenu", "renderMenuItem", "onSelect"]);
  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
    merge = _useClassNames.merge,
    prefix = _useClassNames.prefix;
  var classes = merge(className, prefix('items'));
  var rootRef = (0, _react.useRef)();
  var _useCustom = (0, _utils.useCustom)(),
    rtl = _useCustom.rtl;
  var _useCombobox = (0, _Picker.useCombobox)(),
    id = _useCombobox.id,
    labelId = _useCombobox.labelId,
    popupType = _useCombobox.popupType;
  (0, _react.useEffect)(function () {
    var _rootRef$current;
    var columns = ((_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.querySelectorAll('[data-type="column"]')) || [];
    columns.forEach(function (column) {
      if (!column) {
        return;
      }
      var activeItem = column.querySelector("." + prefix('item-focus'));
      if (!activeItem) {
        activeItem = column.querySelector("." + prefix('item-active'));
      }
      if (activeItem) {
        var position = (0, _getPosition.default)(activeItem, column);
        // Let the active option scroll into view.
        (0, _scrollTop.default)(column, position === null || position === void 0 ? void 0 : position.top);
      }
    });
  }, [prefix]);
  var getCascadePaths = function getCascadePaths(layer, node) {
    var paths = [];
    for (var i = 0; i < cascadeData.length && i < layer; i += 1) {
      if (i < layer - 1 && cascadePaths) {
        paths.push(cascadePaths[i]);
      }
    }
    paths.push(node);
    return paths;
  };
  var handleSelect = (0, _utils.useEventCallback)(function (layer, node, event) {
    var isLeafNode = (0, _isNil.default)(node[childrenKey]);
    var cascadePaths = getCascadePaths(layer + 1, node);
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(node, cascadePaths, isLeafNode, event);
  });
  var renderCascadeNode = function renderCascadeNode(nodeProps) {
    var _loadingItemsSet$has;
    var node = nodeProps.node,
      index = nodeProps.index,
      layer = nodeProps.layer,
      focus = nodeProps.focus,
      size = nodeProps.size;
    var children = node[childrenKey];
    var value = node[valueKey];
    var label = node[labelKey];
    var disabled = disabledItemValues.some(function (disabledValue) {
      return (0, _utils.shallowEqual)(disabledValue, value);
    });
    var loading = (_loadingItemsSet$has = loadingItemsSet === null || loadingItemsSet === void 0 ? void 0 : loadingItemsSet.has(node)) !== null && _loadingItemsSet$has !== void 0 ? _loadingItemsSet$has : false;

    // Use `value` in keys when If `value` is string or number
    var onlyKey = typeof value === 'number' || typeof value === 'string' ? value : index;
    var Icon = loading ? _Spinner.default : rtl ? _AngleLeft.default : _AngleRight.default;
    return /*#__PURE__*/_react.default.createElement(_Picker.ListItem, {
      as: 'li',
      role: "treeitem",
      "aria-level": layer + 1,
      "aria-setsize": size,
      "aria-posinset": index + 1,
      "aria-label": typeof label === 'string' ? label : undefined,
      classPrefix: "picker-cascader-menu-item",
      key: layer + "-" + onlyKey,
      disabled: disabled,
      active: !(0, _isUndefined.default)(activeItemValue) && (0, _utils.shallowEqual)(activeItemValue, value),
      focus: focus,
      value: value,
      className: children ? prefix('has-children') : undefined,
      onSelect: function onSelect(_value, event) {
        return handleSelect(layer, node, event);
      }
    }, renderMenuItem ? renderMenuItem(label, node) : label, children ? /*#__PURE__*/_react.default.createElement(Icon, {
      className: prefix('caret'),
      spin: loading,
      "data-testid": "spinner"
    }) : null);
  };
  var cascadeNodes = cascadeData.map(function (children, layer) {
    var onlyKey = layer + "_" + children.length;
    var parentNode = cascadePaths[layer - 1];
    var menu = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children.map(function (item, index) {
      var focus = cascadePaths[layer] && (0, _utils.shallowEqual)(cascadePaths[layer][valueKey], item[valueKey]);
      return renderCascadeNode({
        node: item,
        index: index,
        layer: layer,
        focus: focus,
        size: children.length
      });
    }));
    return /*#__PURE__*/_react.default.createElement("ul", {
      role: "group",
      "data-layer": layer,
      "data-type": 'column',
      key: onlyKey,
      className: prefix('column'),
      style: {
        height: menuHeight,
        width: menuWidth
      }
    }, renderMenu ? renderMenu(children, menu, parentNode, layer) : menu);
  });
  var styles = (0, _extends2.default)({}, style, {
    width: cascadeData.length * menuWidth
  });
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    role: "tree",
    id: id + "-" + popupType,
    "aria-labelledby": labelId
  }, rest, {
    ref: (0, _utils.mergeRefs)(rootRef, ref),
    className: classes,
    style: styles
  }), cascadeNodes);
});
TreeView.displayName = 'TreeView';
var _default = TreeView;
exports.default = _default;