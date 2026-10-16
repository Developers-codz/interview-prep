import { useState } from 'react'
import './App.css';
import { initData } from './data';
import TreeNode from './components/treeNode';




function App() {
  const [tree, setTree] = useState(initData);

  const findNode = (nodes, searchLabel) => {
    for (const node of nodes) {
      if (node.label === searchLabel) return node;
      if (node.children && node.children.length > 0) {
        const found = findNode(node.children, searchLabel); 
        if (found) return found;
      }
    }
    return false;
  }

  const updateChildrenRecursively = (node, tree) => {
    const updateNode = (tree) => {
      return tree.map(item => {
        if (item.label === node.label) {
          // Toggle the checked state
          const newCheckedState = !item.isChecked;
          return {
            ...item,
            isChecked: newCheckedState,
            // Update all children to match parent state
            children: item.children.map(child => ({
              ...child,
              isChecked: newCheckedState,
              children: updateChildrenStates(child.children, newCheckedState)
            }))
          };
        }
        // If not matching node, recursively check children
        return {
          ...item,
          children: updateNode(item.children)
        };
      });
    };

    // Helper function to update all nested children states
    const updateChildrenStates = (children, checkedState) => {
      return children.map(child => ({
        ...child,
        isChecked: checkedState,
        children: updateChildrenStates(child.children, checkedState)
      }));
    };

    return updateNode(tree);
  };

  const handleToggle = (label) => {
    const currentNode = findNode(tree, label);
    const updatedTree = updateChildrenRecursively(currentNode, tree);
    setTree(updatedTree);
  }

  return (
    <>
    <div>Recursive Checkbox App</div>
    <div>
      <TreeNode node={tree} onToggle={handleToggle} />
    </div>
    </>
  )
}



export default App
