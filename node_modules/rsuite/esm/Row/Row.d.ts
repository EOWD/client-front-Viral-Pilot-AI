import { WithAsProps, RsRefForwardingComponent } from '../@types/common';
export interface RowProps extends WithAsProps {
    gutter?: number;
}
/**
 * The `Row` component is used for layout and grids.
 * @see https://rsuitejs.com/components/grid
 */
declare const Row: RsRefForwardingComponent<'div', RowProps>;
export default Row;
