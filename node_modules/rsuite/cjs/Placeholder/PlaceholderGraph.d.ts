import { WithAsProps, RsRefForwardingComponent } from '../@types/common';
export interface PlaceholderGraphProps extends WithAsProps {
    height?: number;
    width?: number;
    /** Placeholder status */
    active?: boolean;
}
/**
 * The `Placeholder.Graph` component is used to display the loading state of the block.
 * @see https://rsuitejs.com/components/placeholder
 */
declare const PlaceholderGraph: RsRefForwardingComponent<'div', PlaceholderGraphProps>;
export default PlaceholderGraph;
