import React from "react";

const TableColumn = props => {
  const { children, id, onSort , sortable } = props;
  let className = "table-col",
    onClick;
  if (sortable) {
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
      {children}{" "}
      {props.sortColumn === id
                ? props.sortDirection === "desc"
                  ?"\u2193"
                  : "\u2191"
                : ""}
    </th>
  );
};

export default TableColumn;
