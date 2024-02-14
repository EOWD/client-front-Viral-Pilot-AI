import React from 'react';
import { ItemDataType, WithAsProps, RsRefForwardingComponent } from '../@types/common';
import { ValueType } from './MultiCascader';
export interface TreeViewProps extends WithAsProps {
    disabledItemValues: ValueType;
    value: ValueType;
    childrenKey: string;
    valueKey: string;
    labelKey: string;
    menuWidth?: number;
    menuHeight?: number | string;
    cascade?: boolean;
    cascadeData: (readonly ItemDataType[])[];
    cascadePaths?: ItemDataType[];
    uncheckableItemValues: ValueType;
    renderMenuItem?: (itemLabel: React.MouseEventHandler, item: ItemDataType) => React.ReactNode;
    renderMenu?: (children: readonly ItemDataType[], menu: React.ReactNode, parentNode?: ItemDataType, layer?: number) => React.ReactNode;
    onCheck?: (node: ItemDataType, event: React.SyntheticEvent, checked: boolean) => void;
    onSelect?: (node: ItemDataType, cascadePaths: ItemDataType[], event: React.SyntheticEvent) => void;
}
/**
 * TODO: reuse Menu from Cascader for consistent behavior
 */
declare const TreeView: RsRefForwardingComponent<'div', TreeViewProps>;
export default TreeView;
