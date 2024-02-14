import React from 'react';
import { ToastContainerProps } from './ToastContainer';
/**
 * The 'useToaster' hook is a wrapper for the 'toaster' module.
 * @returns toaster { push, remove, clear }
 *
 * @see https://rsuitejs.com/components/message/
 * @see https://rsuitejs.com/components/notification/
 */
declare const useToaster: () => {
    /**
     * Push a toast message.
     * @param message The message to be displayed.
     *                eg: `<Message type="success" description="Success" />` or `<Notification type="success" closable>Success</Notification>`
     * @param options The options of the toast message. (optional)
     *                eg: `{ placement: 'topCenter', duration: 5000 }`
     * @returns The key of the toast message.
     */
    push: (message: React.ReactNode, options?: ToastContainerProps) => string | Promise<string | undefined> | undefined;
    /**
     * Remove a toast message.
     * @param key  The key of the toast message.
     */
    remove: (key: string) => void;
    /**
     * Clear all toast messages.
     */
    clear: () => void;
};
export default useToaster;
