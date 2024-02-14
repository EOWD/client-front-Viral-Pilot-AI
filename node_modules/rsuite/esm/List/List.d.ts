import { SortConfig } from './helper/useSortHelper';
import { RsRefForwardingComponent, WithAsProps } from '../@types/common';
import ListItem from './ListItem';
export interface ListProps extends WithAsProps, SortConfig {
    size?: 'lg' | 'md' | 'sm';
    bordered?: boolean;
    hover?: boolean;
    sortable?: boolean;
}
export interface ListComponent extends RsRefForwardingComponent<'div', ListProps> {
    Item: typeof ListItem;
}
/**
 * The `List` component is used to specify the layout of the list.
 * @see https://rsuitejs.com/components/list
 */
declare const List: ListComponent;
export default List;
