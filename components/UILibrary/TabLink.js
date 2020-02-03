import React from "react";

const TabLink = props => {
  const { id, handleClick, children } = props;
  function selectTab() {
    handleClick(id);
  }
  return (
    <li onClick={selectTab} className="tab-link">
      {children}
    </li>
  );
};

export default TabLink;
