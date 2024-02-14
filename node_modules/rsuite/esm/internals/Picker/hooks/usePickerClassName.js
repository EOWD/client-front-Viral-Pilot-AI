'use client';
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import kebabCase from 'lodash/kebabCase';
import omit from 'lodash/omit';
import { useClassNames, placementPolyfill } from '../../../utils';
/**
 * The className of the assembled Toggle is on the Picker.
 */
function usePickerClassName(props) {
  var _withClassPrefix;
  var name = props.name,
    classPrefix = props.classPrefix,
    className = props.className,
    placement = props.placement,
    appearance = props.appearance,
    cleanable = props.cleanable,
    block = props.block,
    disabled = props.disabled,
    countable = props.countable,
    readOnly = props.readOnly,
    plaintext = props.plaintext,
    hasValue = props.hasValue,
    rest = _objectWithoutPropertiesLoose(props, ["name", "classPrefix", "className", "placement", "appearance", "cleanable", "block", "disabled", "countable", "readOnly", "plaintext", "hasValue"]);
  var _useClassNames = useClassNames(classPrefix),
    withClassPrefix = _useClassNames.withClassPrefix,
    merge = _useClassNames.merge;
  var classes = merge(className, withClassPrefix(name, appearance, 'toggle-wrapper', (_withClassPrefix = {}, _withClassPrefix["placement-" + kebabCase(placementPolyfill(placement))] = placement, _withClassPrefix['read-only'] = readOnly, _withClassPrefix['has-value'] = hasValue, _withClassPrefix.cleanable = cleanable, _withClassPrefix.block = block, _withClassPrefix.disabled = disabled, _withClassPrefix.countable = countable, _withClassPrefix.plaintext = plaintext, _withClassPrefix)));

  // Those props that're used for composing the className
  var usedClassNamePropKeys = Object.keys(omit(props, [].concat(Object.keys(rest || {}), ['disabled', 'readOnly', 'plaintext', 'name'])));
  return [classes, usedClassNamePropKeys];
}
export default usePickerClassName;