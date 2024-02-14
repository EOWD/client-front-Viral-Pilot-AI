'use client';
import PlaceholderGraph from './PlaceholderGraph';
import PlaceholderGrid from './PlaceholderGrid';
import PlaceholderParagraph from './PlaceholderParagraph';
/**
 * The `Placeholder` component is used to display the loading state of the block.
 * @see https://rsuitejs.com/components/placeholder
 */
var Placeholder = PlaceholderParagraph;
Placeholder.Paragraph = PlaceholderParagraph;
Placeholder.Grid = PlaceholderGrid;
Placeholder.Graph = PlaceholderGraph;
export default Placeholder;