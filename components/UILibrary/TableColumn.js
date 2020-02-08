import React from "react";

const TableColumn = props => {
  const { children, id, onSort } = props;
  let className = "table-col",
    onClick;
  if (onSort) {
    className = "table-col" + " sortable";
    onClick = sortColumn;
  }
  function sortColumn(e) {
    onSort(e.target.id);
  }
  var rest = {
    className,
    onClick
  };
  return (
    <th id={id} {...rest}>
      {children}
    </th>
  );
};

export default TableColumn;
