import React from "react";

const TableColumn = props => {
  const { children } = props;

  return <th className="table-col">{children}</th>;
};

export default TableColumn;
