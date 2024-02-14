import { WithAsProps, RsRefForwardingComponent } from '../@types/common';
export interface PlaceholderGridProps extends WithAsProps {
    rows?: number;
    rowHeight?: number;
    rowMargin?: number;
    columns?: number;
    /** Placeholder status */
    active?: boolean;
}
/**
 * The `Placeholder.Grid` component is used to display the loading state of the block.
 * @see https://rsuitejs.com/components/placeholder
 */
declare const PlaceholderGrid: RsRefForwardingComponent<'div', PlaceholderGridProps>;
export default PlaceholderGrid;
