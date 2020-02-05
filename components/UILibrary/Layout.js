import React from "react";

const Layout = function(props) {
  const { className, columns } = props;
  const containerClassName = "row-col-container " + className;
  let cols = Number.parseInt(columns);
  const myChildren = React.Children.toArray(props.children);
  if (myChildren.length <= 0) {
    return null;
  }
  let mainBody = [];
  let rows = [];
  let tempColumnName = 12 / cols + "";
  const columnClassName =
    "column-" + tempColumnName + " " + className + "-column";
  const rowClassName = "row" + " " + className + "-row";
  for (let i = 1; i <= myChildren.length; i++) {
    rows.push(
      <div className={columnClassName} key={columnClassName + i}>
        {myChildren[i - 1]}
      </div>
    );
    /** suppose children =5 and columns=2  */
    if (i % cols === 0 || i === myChildren.length) {
      mainBody.push(
        <div className={rowClassName} key={"row" + i}>
          {rows}
        </div>
      );
      rows = [];
    }
  }
  return <div className={containerClassName}>{mainBody}</div>;
};

export default Layout;
