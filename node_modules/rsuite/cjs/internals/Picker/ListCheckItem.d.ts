import React from 'react';
import { CheckboxProps } from '../../Checkbox';
import { WithAsProps, RsRefForwardingComponent } from '../../@types/common';
export interface ListCheckItemProps extends WithAsProps {
    active?: boolean;
    checkboxAs?: React.ElementType | string;
    classPrefix?: string;
    disabled?: boolean;
    checkable?: boolean;
    indeterminate?: boolean;
    value?: string | number;
    focus?: boolean;
    title?: string;
    className?: string;
    children?: React.ReactNode;
    onSelect?: (value: any, event: React.SyntheticEvent, checked: boolean) => void;
    onCheck?: (value: any, event: React.SyntheticEvent, checked: boolean) => void;
    onSelectItem?: (value: any, event: React.SyntheticEvent, checked: boolean) => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    renderMenuItemCheckbox?: (checkboxProps: CheckboxProps) => React.ReactNode;
}
declare const ListCheckItem: RsRefForwardingComponent<'div', ListCheckItemProps>;
export default ListCheckItem;
