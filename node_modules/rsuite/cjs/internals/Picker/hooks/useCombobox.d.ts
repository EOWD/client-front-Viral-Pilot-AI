declare function useCombobox(): {
    id: string | undefined;
    popupType: "dialog" | "menu" | "grid" | "listbox" | "tree" | undefined;
    multiple: boolean | undefined;
    labelId: string | undefined;
};
export default useCombobox;
