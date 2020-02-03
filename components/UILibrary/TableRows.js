import React from "react";

const TableRows = props => {
  const { activeId, handleClick, children } = props;
  const links = React.Children.map(children, child => {
    return React.cloneElement(child, {
      activeId,
      handleClick
    });
  });

  return <tr>{links}</tr>;
};
export default TableRows;
