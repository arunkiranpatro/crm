import React from "react";
import ArraySort from "array-sort";

class Table extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {});
    });

    return <table className="table-container">{children}</table>;
  }
}
export default Table;
