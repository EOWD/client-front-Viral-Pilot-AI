import { WithAsProps, RsRefForwardingComponent } from '../@types/common';
export interface PlaceholderParagraphProps extends WithAsProps {
    rows?: number;
    rowHeight?: number;
    rowMargin?: number;
    graph?: boolean | 'circle' | 'square' | 'image';
    /** Placeholder status */
    active?: boolean;
}
/**
 * The `Placeholder.Paragraph` component is used to display the loading state of the block.
 * @see https://rsuitejs.com/components/placeholder
 */
declare const PlaceholderParagraph: RsRefForwardingComponent<'div', PlaceholderParagraphProps>;
export default PlaceholderParagraph;
