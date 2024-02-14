import React from 'react';
import ToggleButton, { ToggleButtonProps } from './ToggleButton';
import { RsRefForwardingComponent, TypeAttributes } from '../../@types/common';
import { IconProps } from '@rsuite/icons/lib/Icon';
declare type ValueType = string | number;
export interface PickerToggleProps extends ToggleButtonProps {
    active?: boolean;
    hasValue?: boolean;
    cleanable?: boolean;
    caret?: boolean;
    /**
     * Custom caret component
     * @deprecated Use `caretAs` instead
     */
    caretComponent?: React.FC<IconProps>;
    /**
     * Custom caret component
     */
    caretAs?: React.ElementType;
    disabled?: boolean;
    placement?: TypeAttributes.Placement;
    readOnly?: boolean;
    plaintext?: boolean;
    tabIndex?: number;
    /**
     * Whether to display an loading indicator on toggle button
     */
    loading?: boolean;
    label?: React.ReactNode;
    name?: string;
    inputValue?: ValueType | ValueType[];
    focusItemValue?: ValueType | null;
    onClean?: (event: React.MouseEvent) => void;
}
declare const PickerToggle: RsRefForwardingComponent<typeof ToggleButton, PickerToggleProps>;
export default PickerToggle;
