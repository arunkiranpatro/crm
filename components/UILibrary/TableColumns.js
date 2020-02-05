import React from "react";

const TableColumns = props => {
  const { children } = props;
  const links = React.Children.map(children, child => {
    return React.cloneElement(child, {});
  });

  return (
    <thead>
      <tr>{links}</tr>
    </thead>
  );
};
export default TableColumns;
