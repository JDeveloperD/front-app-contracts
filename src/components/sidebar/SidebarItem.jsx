import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

function SidebarItem(props) {
  const { name, path, icon } = props;

  return(
    <li className="sidebar-item">
      <Link className="sidebar-link" to={path}>
        <FeatherIcon icon={icon} className="align-middle"/>
        <span className="align-middle">{name}</span>
      </Link>
    </li>
  );
}

export default SidebarItem;