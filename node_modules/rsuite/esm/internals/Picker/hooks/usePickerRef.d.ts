/// <reference types="react" />
import type { OverlayTriggerHandle } from '../PickerToggleTrigger';
import type { ListHandle } from '../../../internals/Windowing';
export interface PickerDependentParameters {
    inline?: boolean;
}
/**
 * A hook of the exposed method of Picker
 */
declare function usePickerRef(ref: any, parmas?: PickerDependentParameters): {
    trigger: import("react").RefObject<OverlayTriggerHandle>;
    root: import("react").MutableRefObject<any>;
    overlay: import("react").RefObject<HTMLElement>;
    target: import("react").RefObject<HTMLElement>;
    list: import("react").RefObject<ListHandle>;
    searchInput: import("react").RefObject<HTMLInputElement>;
    treeView: import("react").RefObject<HTMLDivElement>;
};
export default usePickerRef;
