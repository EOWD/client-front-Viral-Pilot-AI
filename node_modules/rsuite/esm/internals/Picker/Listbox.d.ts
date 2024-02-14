import React from 'react';
import { ListProps, ListHandle } from '../../internals/Windowing';
import { StandardProps, ItemDataType } from '../../@types/common';
export interface ListboxProps<Multiple = false> extends StandardProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    classPrefix: string;
    data?: ItemDataType[];
    group?: boolean;
    groupBy?: string;
    disabledItemValues?: any[];
    activeItemValues?: any[];
    focusItemValue?: any;
    maxHeight?: number;
    valueKey?: string;
    labelKey?: string;
    className?: string;
    style?: React.CSSProperties;
    listItemAs: React.ElementType | string;
    listItemClassPrefix?: string;
    listItemProps?: any;
    rowHeight?: number;
    rowGroupHeight?: number;
    virtualized?: boolean;
    listProps?: Partial<ListProps>;
    listRef?: React.Ref<ListHandle>;
    /** Custom selected option */
    renderMenuItem?: (itemLabel: React.ReactNode, item: any) => React.ReactNode;
    renderMenuGroup?: (title: React.ReactNode, item: any) => React.ReactNode;
    onSelect?: Multiple extends true ? (value: any, item: any, event: React.MouseEvent, checked: boolean) => void : Multiple extends false ? (value: any, item: any, event: React.MouseEvent) => void : any;
    onGroupTitleClick?: (event: React.MouseEvent) => void;
}
export declare type ListboxComponent = React.ForwardRefExoticComponent<ListboxProps> & {
    <Multiple = false>(props: ListboxProps<Multiple>): React.ReactElement | null;
};
declare const Listbox: ListboxComponent;
export default Listbox;
