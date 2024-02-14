import React from 'react';
import type { TagProps } from '../Tag';
import type { CheckboxProps } from '../Checkbox';
export declare type TriggerType = 'Enter' | 'Space' | 'Comma';
export interface TagOnlyProps {
    /**  Tag related props. */
    tagProps: TagProps;
    /**
     * Set the trigger for creating tags. only valid when creatable
     */
    trigger: TriggerType | TriggerType[];
    /** Callback fired when a tag is removed. */
    onTagRemove?: (tag: string, event: React.MouseEvent) => void;
}
export interface InputPickerContextProps extends TagOnlyProps {
    /** Multiple selections are allowed */
    multi?: boolean;
    /**
     * No overlay provides options
     */
    disabledOptions?: boolean;
    /** Custom render checkbox on menu item */
    renderMenuItemCheckbox?: (checkboxProps: CheckboxProps) => React.ReactNode;
}
declare const InputPickerContext: React.Context<InputPickerContextProps>;
export default InputPickerContext;
