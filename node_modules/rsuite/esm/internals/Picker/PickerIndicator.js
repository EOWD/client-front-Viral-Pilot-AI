'use client';
import React from 'react';
import { Icon } from '@rsuite/icons';
import { useCustom, useClassNames } from '../../utils';
import InputGroup from '../../InputGroup';
import CloseButton from '../CloseButton';
import Loader from '../../Loader';
var PickerIndicator = function PickerIndicator(_ref) {
  var loading = _ref.loading,
    caretAs = _ref.caretAs,
    onClose = _ref.onClose,
    showCleanButton = _ref.showCleanButton,
    _ref$as = _ref.as,
    Component = _ref$as === void 0 ? InputGroup.Addon : _ref$as;
  var _useCustom = useCustom(),
    locale = _useCustom.locale;
  var _useClassNames = useClassNames('picker'),
    prefix = _useClassNames.prefix;
  var addon = function addon() {
    if (loading) {
      return /*#__PURE__*/React.createElement(Loader, {
        className: prefix('loader'),
        "data-testid": "spinner"
      });
    }
    if (showCleanButton) {
      return /*#__PURE__*/React.createElement(CloseButton, {
        className: prefix('clean'),
        tabIndex: -1,
        locale: {
          closeLabel: locale === null || locale === void 0 ? void 0 : locale.clear
        },
        onClick: onClose
      });
    }
    return caretAs && /*#__PURE__*/React.createElement(Icon, {
      as: caretAs,
      className: prefix('caret-icon')
    });
  };
  return /*#__PURE__*/React.createElement(Component, null, addon());
};
export default PickerIndicator;