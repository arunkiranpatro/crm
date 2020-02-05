import React from "react";

const Container = function(props) {
  const body = React.Children.map(props.children, child => {
    return React.cloneElement(child);
  });
  return <div className={props.className}>{body}</div>;
};

export default Container;
