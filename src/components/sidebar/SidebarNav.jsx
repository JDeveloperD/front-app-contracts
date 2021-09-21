import React from 'react';
import SidebarHeader from "./SidebarHeader.jsx";
import SidebarItem from "./SidebarItem.jsx";

import items from '../../settings/items-sidebar.json';

function SidebarNav() {
  return (
    <ul className="sidebar-nav">

      { items.map((item, key) => {
          if (item.type === "title") {
            return <SidebarHeader title={item.name} key={key}/>
          } else {
            return <SidebarItem key={key} name={item.name} path={item.path} icon={item.icon}/>
          }
        })      
      }

    </ul>
  )
}

export default SidebarNav;