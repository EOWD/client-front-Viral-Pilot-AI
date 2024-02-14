import React from 'react';
import { OverlayTriggerHandle } from '../internals/Overlay/OverlayTrigger';
import { OverlayTriggerProps } from '../internals/Overlay/OverlayTrigger';
export declare type WhisperProps = OverlayTriggerProps;
export declare type WhisperInstance = OverlayTriggerHandle;
/**
 * The `Whisper` component is used to display a floating element.
 * It is usually used with the `Tooltip` and `Popover` components.
 *
 * @see https://rsuitejs.com/components/whisper
 */
declare const Whisper: React.ForwardRefExoticComponent<OverlayTriggerProps & React.RefAttributes<OverlayTriggerHandle>>;
export default Whisper;
