import React from 'react';
interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
    treeRootClassName: string;
    multiselectable?: boolean;
}
declare const TreeView: React.ForwardRefExoticComponent<TreeViewProps & React.RefAttributes<HTMLDivElement>>;
export default TreeView;
