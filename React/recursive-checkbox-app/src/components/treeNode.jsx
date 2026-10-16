import React from 'react';
const TreeNode = ({node, onToggle}) => {
    return (
      <div>
          {node?.map(item => {
            return (
              <div>
                <input type="checkbox" checked={item?.isChecked} onChange={() => onToggle(item?.label)} />
                <span>{item?.label}</span>
                {item?.children?.length > 0 && (
                  <div className='ml-4'>
                    <TreeNode node={item?.children} onToggle={onToggle} />                
                  </div>
                )}
              </div>
            )
          })}
      </div>
    )
  }

  export default TreeNode;