import React from "react";

const Tab = ({ activeId, id, children }) => {
  return <div className="tab-body">{activeId === id && children}</div>;
};
export default Tab;
