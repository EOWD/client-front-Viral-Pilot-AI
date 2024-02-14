import React from 'react';
import { ItemDataType, WithAsProps, RsRefForwardingComponent } from '../@types/common';
import { ValueType } from './Cascader';
declare type SetLike<T = unknown> = {
    has(value: T): boolean;
};
export interface TreeViewProps extends Omit<WithAsProps, 'classPrefix'> {
    classPrefix: string;
    disabledItemValues: ValueType[];
    activeItemValue?: ValueType | null;
    childrenKey: string;
    cascadeData: (readonly ItemDataType[])[];
    loadingItemsSet?: SetLike<ItemDataType>;
    cascadePaths: ItemDataType[];
    valueKey: string;
    labelKey: string;
    menuWidth?: number;
    menuHeight?: number | string;
    renderMenuItem?: (itemLabel: React.ReactNode, item: ItemDataType) => React.ReactNode;
    renderMenu?: (items: readonly ItemDataType[], menu: React.ReactNode, parentNode?: ItemDataType, layer?: number) => React.ReactNode;
    onSelect?: (node: ItemDataType, cascadePaths: ItemDataType[], isLeafNode: boolean, event: React.MouseEvent) => void;
}
declare const TreeView: RsRefForwardingComponent<'div', TreeViewProps>;
export default TreeView;
