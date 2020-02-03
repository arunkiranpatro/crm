import React from "react";

class Table extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {});
    });

    return <table className="table-container">{children}</table>;
  }
}
export default Table;
