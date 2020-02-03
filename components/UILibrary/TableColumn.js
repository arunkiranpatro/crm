import React from "react";

const TableColumn = props => {
  const { id, handleClick, children } = props;
  function selectTab() {
    handleClick(id);
  }
  return (
    <th onClick={selectTab} className="table-col">
      {children}
    </th>
  );
};

export default TableColumn;
