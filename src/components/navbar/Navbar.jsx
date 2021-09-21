import React from 'react';
import NotificationContainer from './notifications/NotificationContainer';
import InboxContainer from './inbox/InboxContainer';
import UserProfileContainer from './user/UserProfileContainer';

import data from '../../settings/user-info.json';

class Navbar extends React.Component {
  render() {
    const { notifications, inbox, userInfo } = data;

    return(
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <button className="sidebar-toggle js-sidebar-toggle bg-transparent border-0">
          <i className="hamburger align-self-center"></i>
        </button>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            
            <NotificationContainer notifications={notifications} />
            <InboxContainer inbox={inbox} />
            <UserProfileContainer nickName={userInfo.nickName} names={userInfo.names} avatar={userInfo.avatar} />
            
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;