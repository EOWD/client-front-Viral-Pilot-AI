import { FormControlPickerProps, RsRefForwardingComponent } from '../@types/common';
import { ValueType } from '../CheckTreePicker';
import { TreeBaseProps } from '../Tree/Tree';
export interface CheckTreeProps extends TreeBaseProps<ValueType>, FormControlPickerProps<ValueType> {
    /** Tree node cascade */
    cascade?: boolean;
    /** Set the option value for the check box not to be rendered */
    uncheckableItemValues?: ValueType;
}
/**
 * The `CheckTree` component is used for selecting multiple options which are organized in a tree structure.
 * @see https://rsuitejs.com/components/check-tree
 */
declare const CheckTree: RsRefForwardingComponent<'div', CheckTreeProps>;
export default CheckTree;
