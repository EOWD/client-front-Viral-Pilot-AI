import React from 'react';
import { AnimationEventProps, RsRefForwardingComponent, WithAsProps } from '../@types/common';
export interface PanelProps<T = string | number> extends WithAsProps, AnimationEventProps {
    /** Show border */
    bordered?: boolean;
    /** Content area filled with containers */
    bodyFill?: boolean;
    /** Whether it is a collapsible panel */
    collapsible?: boolean;
    /**
     * The icon on the right side of the title.
     */
    caretAs?: React.ElementType;
    /** Expand then panel by default */
    defaultExpanded?: boolean;
    /** Whether the panel is disabled */
    disabled?: boolean;
    /** Expand then panel */
    expanded?: boolean;
    /** The event key corresponding to the panel. */
    eventKey?: T;
    /** The head displays information. */
    header?: React.ReactNode;
    /** ID */
    id?: string;
    /**
     * Role of header
     */
    headerRole?: string;
    /** Role of Panel */
    panelRole?: string;
    /** With shadow */
    shaded?: boolean;
    /** callback function for the panel clicked */
    onSelect?: (eventKey: T | undefined, event: React.SyntheticEvent) => void;
}
/**
 * The `Panel` component is used to display content that can be collapsed.
 * @see https://rsuitejs.com/components/panel
 */
declare const Panel: RsRefForwardingComponent<'div', PanelProps>;
export default Panel;
