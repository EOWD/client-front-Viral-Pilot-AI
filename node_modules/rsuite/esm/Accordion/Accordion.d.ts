import { type PanelGroupProps } from '../PanelGroup';
import Panel from '../Panel';
import { RsRefForwardingComponent } from '../@types/common';
export declare type AccordionProps = Omit<PanelGroupProps, 'accordion'>;
export interface AccordionComponent extends RsRefForwardingComponent<'div', AccordionProps> {
    Panel: typeof Panel;
}
/**
 * The `Accordion` component is used to display content that can be collapsed.
 * @see https://rsuitejs.com/components/accordion
 */
declare const Accordion: AccordionComponent;
export default Accordion;
