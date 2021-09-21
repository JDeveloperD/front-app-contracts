import React from 'react';
import SidebarNav from './SidebarNav';

class Sidebar extends React.Component {
  render() {
    return (
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">

          <a className="sidebar-brand" href="index.html">
            <span className="align-middle">JS Contratos</span>
          </a>

          <SidebarNav />

        </div>
      </nav>
    )
  }
}

export default Sidebar;