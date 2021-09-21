import React from "react";

function SidebarHeader(props) {
  const { title } = props;
  return (
    <li className="sidebar-header"> {title} </li>
  );
}

export default SidebarHeader;