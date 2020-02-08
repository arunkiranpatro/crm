import React, { useState } from "react";
import ArraySort from "array-sort";
import PropTypes from "prop-types";
const Table =function(props) {

  const { onSort= onSortDefault } = props;
  const [sortColumn,setSortColumn] = useState(props.sortColumn);
  const [sortDirection,setSortDirection] = useState(props.sortDirection);

    function onSortDefault(column) {
      let { data } = props;
      if (column === sortColumn) {
        data = ArraySort(data, column, { reverse : !sortDirection });
        setSortColumn(column);
        setSortDirection(!sortDirection);
      } else {
        data = ArraySort(data, column);
        setSortColumn(column);
      }
    }
  
  const config={
      onSort ,
      sortColumn,
      sortDirection
  };
  return (
  
  <table className="table-container">
          {props.renderTableHeader(config)}
         <tbody>
          {props.renderTableBody(props.data)}
          </tbody>
   </table>);
}

Table.propTypes={

  sortColumn:PropTypes.string.isRequired,
  sortDirection:PropTypes.bool.isRequired
}
export default Table;
