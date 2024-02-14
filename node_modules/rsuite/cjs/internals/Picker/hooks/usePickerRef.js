'use client';
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = require("react");
var _useEventCallback = _interopRequireDefault(require("../../../utils/useEventCallback"));
/**
 * A hook of the exposed method of Picker
 */
function usePickerRef(ref, parmas) {
  var trigger = (0, _react.useRef)(null);
  var root = (0, _react.useRef)(null);
  var target = (0, _react.useRef)(null);
  var overlay = (0, _react.useRef)(null);
  var list = (0, _react.useRef)(null);
  var searchInput = (0, _react.useRef)(null);
  var treeView = (0, _react.useRef)(null);
  var _ref = parmas || {},
    inline = _ref.inline;
  var handleOpen = (0, _useEventCallback.default)(function () {
    var _trigger$current;
    trigger === null || trigger === void 0 ? void 0 : (_trigger$current = trigger.current) === null || _trigger$current === void 0 ? void 0 : _trigger$current.open();
  });
  var handleClose = (0, _useEventCallback.default)(function () {
    var _trigger$current2;
    trigger === null || trigger === void 0 ? void 0 : (_trigger$current2 = trigger.current) === null || _trigger$current2 === void 0 ? void 0 : _trigger$current2.close();
  });
  var handleUpdatePosition = (0, _useEventCallback.default)(function () {
    var _trigger$current3;
    trigger === null || trigger === void 0 ? void 0 : (_trigger$current3 = trigger.current) === null || _trigger$current3 === void 0 ? void 0 : _trigger$current3.updatePosition();
  });
  (0, _react.useImperativeHandle)(ref, function () {
    // Tree and CheckTree
    if (inline) {
      return {
        get root() {
          var _trigger$current$root, _trigger$current4;
          return root !== null && root !== void 0 && root.current ? root === null || root === void 0 ? void 0 : root.current : (_trigger$current$root = trigger === null || trigger === void 0 ? void 0 : (_trigger$current4 = trigger.current) === null || _trigger$current4 === void 0 ? void 0 : _trigger$current4.root) !== null && _trigger$current$root !== void 0 ? _trigger$current$root : null;
        },
        get list() {
          if (!(list !== null && list !== void 0 && list.current)) {
            throw new Error('The list is not found, please set `virtualized` for the component.');
          }
          return list === null || list === void 0 ? void 0 : list.current;
        }
      };
    }
    return {
      get root() {
        var _ref2, _trigger$current5;
        return (_ref2 = (root === null || root === void 0 ? void 0 : root.current) || (trigger === null || trigger === void 0 ? void 0 : (_trigger$current5 = trigger.current) === null || _trigger$current5 === void 0 ? void 0 : _trigger$current5.root)) !== null && _ref2 !== void 0 ? _ref2 : null;
      },
      get overlay() {
        var _overlay$current;
        if (!(overlay !== null && overlay !== void 0 && overlay.current)) {
          throw new Error('The overlay is not found. Please confirm whether the picker is open.');
        }
        return (_overlay$current = overlay === null || overlay === void 0 ? void 0 : overlay.current) !== null && _overlay$current !== void 0 ? _overlay$current : null;
      },
      get target() {
        var _target$current;
        return (_target$current = target === null || target === void 0 ? void 0 : target.current) !== null && _target$current !== void 0 ? _target$current : null;
      },
      get list() {
        if (!(list !== null && list !== void 0 && list.current)) {
          throw new Error("\n            The list is not found.\n            1.Please set virtualized for the component.\n            2.Please confirm whether the picker is open.\n          ");
        }
        return list === null || list === void 0 ? void 0 : list.current;
      },
      updatePosition: handleUpdatePosition,
      open: handleOpen,
      close: handleClose
    };
  });
  return {
    trigger: trigger,
    root: root,
    overlay: overlay,
    target: target,
    list: list,
    searchInput: searchInput,
    treeView: treeView
  };
}
var _default = usePickerRef;
exports.default = _default;