import React from 'react';
import { WithAsProps, RsRefForwardingComponent } from '../@types/common';
export interface FormGroupProps extends WithAsProps {
    /**
     * Sets id on `<Form.Control>` and `htmlFor` on `<Form.ControlLabel>`.
     * And generate ʻaria-labelledby` and ʻaria-describedby` for `<Form.Control>`.
     */
    controlId?: string;
}
export declare const FormGroupContext: React.Context<{
    controlId?: string | undefined;
}>;
/**
 * The `<Form.Group>` component is the easiest way to add some structure to forms.
 * @see https://rsuitejs.com/components/form/
 */
declare const FormGroup: RsRefForwardingComponent<'div', FormGroupProps>;
export default FormGroup;
