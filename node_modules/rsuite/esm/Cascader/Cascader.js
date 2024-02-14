'use client';
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useCallback, useMemo } from 'react';
import { useSet } from 'react-use-set';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import isNil from 'lodash/isNil';
import isFunction from 'lodash/isFunction';
import shallowEqual from '../utils/shallowEqual';
import TreeView from './TreeView';
import { getParentMap, getPathTowardsItem, findNodeOfTree, flattenTree } from '../utils/treeUtils';
import { usePaths } from './utils';
import { getSafeRegExpString, createChainedFunction, mergeRefs, useControlled, useCustom, useClassNames, useIsMounted, useEventCallback } from '../utils';
import { PickerToggle, PickerPopup, PickerToggleTrigger, usePickerClassName, usePickerRef, useToggleKeyDownEvent, useFocusItemValue, pickTriggerPropKeys, omitTriggerPropKeys, listPickerPropTypes } from '../internals/Picker';
import SearchBox from '../internals/SearchBox';
import { useMap } from '../utils/useMap';
import { oneOf } from '../internals/propTypes';
var emptyArray = [];

/**
 * The `Cascader` component displays a hierarchical list of options.
 * @see https://rsuitejs.com/components/cascader
 */
var Cascader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
    Component = _props$as === void 0 ? 'div' : _props$as,
    _props$data = props.data,
    data = _props$data === void 0 ? emptyArray : _props$data,
    _props$classPrefix = props.classPrefix,
    classPrefix = _props$classPrefix === void 0 ? 'picker' : _props$classPrefix,
    _props$childrenKey = props.childrenKey,
    childrenKey = _props$childrenKey === void 0 ? 'children' : _props$childrenKey,
    _props$valueKey = props.valueKey,
    valueKey = _props$valueKey === void 0 ? 'value' : _props$valueKey,
    _props$labelKey = props.labelKey,
    labelKey = _props$labelKey === void 0 ? 'label' : _props$labelKey,
    defaultValue = props.defaultValue,
    placeholder = props.placeholder,
    disabled = props.disabled,
    _props$disabledItemVa = props.disabledItemValues,
    disabledItemValues = _props$disabledItemVa === void 0 ? emptyArray : _props$disabledItemVa,
    _props$appearance = props.appearance,
    appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
    _props$cleanable = props.cleanable,
    cleanable = _props$cleanable === void 0 ? true : _props$cleanable,
    overrideLocale = props.locale,
    toggleAs = props.toggleAs,
    style = props.style,
    valueProp = props.value,
    inline = props.inline,
    menuClassName = props.menuClassName,
    menuStyle = props.menuStyle,
    menuWidth = props.menuWidth,
    menuHeight = props.menuHeight,
    _props$searchable = props.searchable,
    searchable = _props$searchable === void 0 ? true : _props$searchable,
    parentSelectable = props.parentSelectable,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottomStart' : _props$placement,
    id = props.id,
    renderMenuItem = props.renderMenuItem,
    renderSearchItem = props.renderSearchItem,
    renderValue = props.renderValue,
    renderMenu = props.renderMenu,
    renderExtraFooter = props.renderExtraFooter,
    onEnter = props.onEnter,
    onExited = props.onExited,
    onClean = props.onClean,
    onChange = props.onChange,
    onSelect = props.onSelect,
    onSearch = props.onSearch,
    onClose = props.onClose,
    onOpen = props.onOpen,
    getChildren = props.getChildren,
    rest = _objectWithoutPropertiesLoose(props, ["as", "data", "classPrefix", "childrenKey", "valueKey", "labelKey", "defaultValue", "placeholder", "disabled", "disabledItemValues", "appearance", "cleanable", "locale", "toggleAs", "style", "value", "inline", "menuClassName", "menuStyle", "menuWidth", "menuHeight", "searchable", "parentSelectable", "placement", "id", "renderMenuItem", "renderSearchItem", "renderValue", "renderMenu", "renderExtraFooter", "onEnter", "onExited", "onClean", "onChange", "onSelect", "onSearch", "onClose", "onOpen", "getChildren"]); // Use component active state to support keyboard events.
  var _useState = useState(false),
    active = _useState[0],
    setActive = _useState[1];
  var _usePickerRef = usePickerRef(ref),
    trigger = _usePickerRef.trigger,
    root = _usePickerRef.root,
    target = _usePickerRef.target,
    overlay = _usePickerRef.overlay,
    searchInput = _usePickerRef.searchInput;
  var _ref = useControlled(valueProp, defaultValue),
    value = _ref[0],
    setValue = _ref[1];
  var isMounted = useIsMounted();
  var loadingItemsSet = useSet();
  var asyncChildrenMap = useMap();
  var parentMap = useMemo(function () {
    return getParentMap(data, function (item) {
      var _asyncChildrenMap$get;
      return (_asyncChildrenMap$get = asyncChildrenMap.get(item)) !== null && _asyncChildrenMap$get !== void 0 ? _asyncChildrenMap$get : item[childrenKey];
    });
  }, [asyncChildrenMap, childrenKey, data]);
  var flattenedData = useMemo(function () {
    return flattenTree(data, function (item) {
      var _asyncChildrenMap$get2;
      return (_asyncChildrenMap$get2 = asyncChildrenMap.get(item)) !== null && _asyncChildrenMap$get2 !== void 0 ? _asyncChildrenMap$get2 : item[childrenKey];
    });
  }, [asyncChildrenMap, childrenKey, data]);

  // The item that focus is on
  var _useState2 = useState(),
    activeItem = _useState2[0],
    setActiveItem = _useState2[1];
  var _usePaths = usePaths({
      data: data,
      activeItem: activeItem,
      selectedItem: flattenedData.find(function (item) {
        return item[valueKey] === value;
      }),
      getParent: function getParent(item) {
        return parentMap.get(item);
      },
      getChildren: function getChildren(item) {
        var _asyncChildrenMap$get3;
        return (_asyncChildrenMap$get3 = asyncChildrenMap.get(item)) !== null && _asyncChildrenMap$get3 !== void 0 ? _asyncChildrenMap$get3 : item[childrenKey];
      }
    }),
    columnsToDisplay = _usePaths.columnsToDisplay,
    pathTowardsActiveItem = _usePaths.pathTowardsActiveItem,
    pathTowardsSelectedItem = _usePaths.pathTowardsSelectedItem;
  var _useCustom = useCustom('Picker', overrideLocale),
    locale = _useCustom.locale,
    rtl = _useCustom.rtl;
  /**
   * 1.Have a value and the value is valid.
   * 2.Regardless of whether the value is valid, as long as renderValue is set, it is judged to have a value.
   */
  var hasValue = pathTowardsSelectedItem.length > 0 || !isNil(value) && isFunction(renderValue);
  var _useClassNames = useClassNames(classPrefix),
    prefix = _useClassNames.prefix,
    merge = _useClassNames.merge;
  var _useState3 = useState(''),
    searchKeyword = _useState3[0],
    setSearchKeyword = _useState3[1];
  var someKeyword = function someKeyword(item, keyword) {
    if (item[labelKey].match(new RegExp(getSafeRegExpString(keyword || searchKeyword), 'i'))) {
      return true;
    }
    var parent = parentMap.get(item);
    if (parent && someKeyword(parent)) {
      return true;
    }
    return false;
  };
  var getSearchResult = function getSearchResult(keyword) {
    var items = [];
    var result = flattenedData.filter(function (item) {
      if (!parentSelectable && item[childrenKey]) {
        return false;
      }
      return someKeyword(item, keyword);
    });
    for (var i = 0; i < result.length; i++) {
      items.push(result[i]);

      // A maximum of 100 search results are returned.
      if (i === 99) {
        return items;
      }
    }
    return items;
  };

  // Used to hover the focuse item  when trigger `onKeydown`
  var _useFocusItemValue = useFocusItemValue(value, {
      rtl: rtl,
      data: flattenedData,
      valueKey: valueKey,
      defaultLayer: pathTowardsSelectedItem !== null && pathTowardsSelectedItem !== void 0 && pathTowardsSelectedItem.length ? pathTowardsSelectedItem.length - 1 : 0,
      target: function target() {
        return overlay.current;
      },
      getParent: function getParent(item) {
        return parentMap.get(item);
      },
      callback: useCallback(function (value) {
        setActiveItem(flattenedData.find(function (item) {
          return item[valueKey] === value;
        }));
      }, [flattenedData, setActiveItem, valueKey])
    }),
    focusItemValue = _useFocusItemValue.focusItemValue,
    setFocusItemValue = _useFocusItemValue.setFocusItemValue,
    setLayer = _useFocusItemValue.setLayer,
    setKeys = _useFocusItemValue.setKeys,
    onFocusItem = _useFocusItemValue.onKeyDown;
  var handleSearch = useEventCallback(function (value, event) {
    var items = getSearchResult(value);
    setSearchKeyword(value);
    onSearch === null || onSearch === void 0 ? void 0 : onSearch(value, event);
    if (!value || items.length === 0) {
      setFocusItemValue(undefined);
      return;
    }
    if (items.length > 0) {
      setFocusItemValue(items[0][valueKey]);
      setLayer(0);
      setKeys([]);
    }
  });
  var handleEntered = useEventCallback(function () {
    if (!target.current) {
      return;
    }
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
    setActive(true);
  });
  var handleExited = useEventCallback(function () {
    if (!target.current) {
      return;
    }
    onClose === null || onClose === void 0 ? void 0 : onClose();
    setActive(false);
    setSearchKeyword('');
  });
  var handleClose = useEventCallback(function () {
    var _trigger$current, _target$current, _target$current$focus;
    (_trigger$current = trigger.current) === null || _trigger$current === void 0 ? void 0 : _trigger$current.close();

    // The focus is on the trigger button after closing
    (_target$current = target.current) === null || _target$current === void 0 ? void 0 : (_target$current$focus = _target$current.focus) === null || _target$current$focus === void 0 ? void 0 : _target$current$focus.call(_target$current);
  });
  var handleClean = useEventCallback(function (event) {
    if (disabled || !target.current) {
      return;
    }
    setValue(null);
    onChange === null || onChange === void 0 ? void 0 : onChange(null, event);
  });
  var handleMenuPressEnter = useEventCallback(function (event) {
    var focusItem = findNodeOfTree(data, function (item) {
      return item[valueKey] === focusItemValue;
    });
    var isLeafNode = focusItem && !focusItem[childrenKey];
    if (isLeafNode) {
      setValue(focusItemValue);
      if (pathTowardsActiveItem.length) {
        setLayer(pathTowardsActiveItem.length - 1);
      }
      if (!shallowEqual(value, focusItemValue)) {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(focusItem, pathTowardsActiveItem, event);
        onChange === null || onChange === void 0 ? void 0 : onChange(focusItemValue !== null && focusItemValue !== void 0 ? focusItemValue : null, event);
      }
      handleClose();
    }
  });
  var onPickerKeyDown = useToggleKeyDownEvent(_extends({
    toggle: !focusItemValue || !active,
    trigger: trigger,
    target: target,
    overlay: overlay,
    searchInput: searchInput,
    active: active,
    onExit: handleClean,
    onMenuKeyDown: onFocusItem,
    onMenuPressEnter: handleMenuPressEnter
  }, rest));
  var handleSelect = useEventCallback(function (node, cascadePaths, isLeafNode, event) {
    var _node$childrenKey, _trigger$current2;
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(node, cascadePaths, event);
    setActiveItem(node);
    var nextValue = node[valueKey];

    // Lazy load node's children
    if (typeof getChildren === 'function' && ((_node$childrenKey = node[childrenKey]) === null || _node$childrenKey === void 0 ? void 0 : _node$childrenKey.length) === 0 && !asyncChildrenMap.has(node)) {
      loadingItemsSet.add(node);
      var children = getChildren(node);
      if (children instanceof Promise) {
        children.then(function (data) {
          if (isMounted()) {
            loadingItemsSet.delete(node);
            asyncChildrenMap.set(node, data);
          }
        });
      } else {
        loadingItemsSet.delete(node);
        asyncChildrenMap.set(node, children);
      }
    }
    if (isLeafNode) {
      // Determines whether the option is a leaf node, and if so, closes the picker.
      handleClose();
      setValue(nextValue);
      if (!shallowEqual(value, nextValue)) {
        onChange === null || onChange === void 0 ? void 0 : onChange(nextValue, event);
      }
      return;
    }

    /** When the parent is optional, the value and the displayed path are updated. */
    if (parentSelectable && !shallowEqual(value, nextValue)) {
      setValue(nextValue);
      onChange === null || onChange === void 0 ? void 0 : onChange(nextValue, event);
    }

    // Update menu position
    (_trigger$current2 = trigger.current) === null || _trigger$current2 === void 0 ? void 0 : _trigger$current2.updatePosition();
  });

  /**
   * The search structure option is processed after being selected.
   */
  var handleSearchRowSelect = useEventCallback(function (node, nodes, event) {
    var nextValue = node[valueKey];
    handleClose();
    setSearchKeyword('');
    setValue(nextValue);
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(node, nodes, event);
    onChange === null || onChange === void 0 ? void 0 : onChange(nextValue, event);
  });
  var renderSearchRow = function renderSearchRow(item, key) {
    var regx = new RegExp(getSafeRegExpString(searchKeyword), 'ig');
    var nodes = getPathTowardsItem(item, function (item) {
      return parentMap.get(item);
    });
    var formattedNodes = nodes.map(function (node) {
      var _extends2;
      var labelElements = [];
      var a = node[labelKey].split(regx);
      var b = node[labelKey].match(regx);
      for (var i = 0; i < a.length; i++) {
        labelElements.push(a[i]);
        if (b && b[i]) {
          labelElements.push( /*#__PURE__*/React.createElement("span", {
            key: i,
            className: prefix('cascader-search-match')
          }, b[i]));
        }
      }
      return _extends({}, node, (_extends2 = {}, _extends2[labelKey] = labelElements, _extends2));
    });
    var disabled = disabledItemValues.some(function (value) {
      return formattedNodes.some(function (node) {
        return node[valueKey] === value;
      });
    });
    var itemClasses = prefix('cascader-row', {
      'cascader-row-disabled': disabled,
      'cascader-row-focus': item[valueKey] === focusItemValue
    });
    var label = formattedNodes.map(function (node, index) {
      return /*#__PURE__*/React.createElement("span", {
        key: "col-" + index,
        className: prefix('cascader-col')
      }, node[labelKey]);
    });
    return /*#__PURE__*/React.createElement("div", {
      role: "treeitem",
      key: key,
      "aria-disabled": disabled,
      "data-key": item[valueKey],
      className: itemClasses,
      tabIndex: -1,
      onClick: function onClick(event) {
        if (!disabled) {
          handleSearchRowSelect(item, nodes, event);
        }
      }
    }, renderSearchItem ? renderSearchItem(label, nodes) : label);
  };
  var renderSearchResultPanel = function renderSearchResultPanel() {
    if (searchKeyword === '') {
      return null;
    }
    var items = getSearchResult();
    return /*#__PURE__*/React.createElement("div", {
      className: prefix('cascader-search-panel'),
      "data-layer": 0,
      role: "tree"
    }, items.length ? items.map(renderSearchRow) : /*#__PURE__*/React.createElement("div", {
      className: prefix('none')
    }, locale.noResultsText));
  };
  var renderTreeView = function renderTreeView(positionProps, speakerRef) {
    var _ref2 = positionProps || {},
      left = _ref2.left,
      top = _ref2.top,
      className = _ref2.className;
    var styles = _extends({}, menuStyle, {
      left: left,
      top: top
    });
    var classes = merge(className, menuClassName, prefix('cascader-menu', {
      inline: inline
    }));
    return /*#__PURE__*/React.createElement(PickerPopup, {
      ref: mergeRefs(overlay, speakerRef),
      className: classes,
      style: styles,
      target: trigger,
      onKeyDown: onPickerKeyDown
    }, searchable && /*#__PURE__*/React.createElement(SearchBox, {
      placeholder: locale === null || locale === void 0 ? void 0 : locale.searchPlaceholder,
      onChange: handleSearch,
      value: searchKeyword,
      inputRef: searchInput
    }), renderSearchResultPanel(), searchKeyword === '' && /*#__PURE__*/React.createElement(TreeView, {
      menuWidth: menuWidth,
      menuHeight: menuHeight,
      disabledItemValues: disabledItemValues,
      loadingItemsSet: loadingItemsSet,
      valueKey: valueKey,
      labelKey: labelKey,
      childrenKey: childrenKey,
      classPrefix: 'picker-cascader-menu',
      cascadeData: columnsToDisplay,
      cascadePaths: pathTowardsActiveItem,
      activeItemValue: value
      // FIXME make onSelect generic
      ,
      onSelect: handleSelect,
      renderMenu: renderMenu,
      renderMenuItem: renderMenuItem
    }), renderExtraFooter === null || renderExtraFooter === void 0 ? void 0 : renderExtraFooter());
  };
  var selectedElement = placeholder;
  if (pathTowardsSelectedItem.length > 0) {
    selectedElement = [];
    pathTowardsSelectedItem.forEach(function (item, index) {
      var key = item[valueKey] || item[labelKey];
      selectedElement.push( /*#__PURE__*/React.createElement("span", {
        key: key
      }, item[labelKey]));
      if (index < pathTowardsSelectedItem.length - 1) {
        selectedElement.push( /*#__PURE__*/React.createElement("span", {
          className: "separator",
          key: key + "-separator"
        }, ' / '));
      }
    });
  }
  if (!isNil(value) && isFunction(renderValue)) {
    selectedElement = renderValue(value, pathTowardsSelectedItem, selectedElement);
    // If renderValue returns null or undefined, hasValue is false.
    if (isNil(selectedElement)) {
      hasValue = false;
    }
  }
  var _usePickerClassName = usePickerClassName(_extends({}, props, {
      classPrefix: classPrefix,
      hasValue: hasValue,
      name: 'cascader',
      appearance: appearance,
      cleanable: cleanable
    })),
    classes = _usePickerClassName[0],
    usedClassNamePropKeys = _usePickerClassName[1]; // TODO: bad api design
  //       consider an isolated Menu component
  if (inline) {
    return renderTreeView();
  }
  return /*#__PURE__*/React.createElement(PickerToggleTrigger, {
    id: id,
    popupType: "tree",
    pickerProps: pick(props, pickTriggerPropKeys),
    ref: trigger,
    placement: placement,
    onEntered: createChainedFunction(handleEntered, onEnter),
    onExited: createChainedFunction(handleExited, onExited),
    speaker: renderTreeView
  }, /*#__PURE__*/React.createElement(Component, {
    className: classes,
    style: style,
    ref: root
  }, /*#__PURE__*/React.createElement(PickerToggle, _extends({}, omit(rest, [].concat(omitTriggerPropKeys, usedClassNamePropKeys)), {
    ref: target,
    as: toggleAs,
    appearance: appearance,
    disabled: disabled,
    onClean: createChainedFunction(handleClean, onClean),
    onKeyDown: onPickerKeyDown,
    cleanable: cleanable && !disabled,
    hasValue: hasValue,
    active: active,
    placement: placement,
    inputValue: value !== null && value !== void 0 ? value : '',
    focusItemValue: focusItemValue
  }), selectedElement || (locale === null || locale === void 0 ? void 0 : locale.placeholder))));
});
Cascader.displayName = 'Cascader';
Cascader.propTypes = _extends({}, listPickerPropTypes, {
  disabledItemValues: PropTypes.array,
  locale: PropTypes.any,
  appearance: oneOf(['default', 'subtle']),
  renderMenu: PropTypes.func,
  onSelect: PropTypes.func,
  onSearch: PropTypes.func,
  cleanable: PropTypes.bool,
  renderMenuItem: PropTypes.func,
  renderSearchItem: PropTypes.func,
  menuWidth: PropTypes.number,
  menuHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  searchable: PropTypes.bool,
  inline: PropTypes.bool,
  parentSelectable: PropTypes.bool
});
export default Cascader;