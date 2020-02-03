import React from "react";

const TableColumns = props => {
  const { activeId, handleClick, children } = props;
  const links = React.Children.map(children, child => {
    return React.cloneElement(child, {
      activeId,
      handleClick
    });
  });

  return (
    <thead>
      <tr>{links}</tr>
    </thead>
  );
};
export default TableColumns;
