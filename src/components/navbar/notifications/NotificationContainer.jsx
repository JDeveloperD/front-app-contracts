import React from 'react';
import { Link } from 'react-router-dom';
import NotificationItem from './NotificationItem';
import FeatherIcon from 'feather-icons-react';

function NotificationContainer(props) {
  
  const { notifications } = props;
  let numNotifications = notifications.length;

  return (
    <li className="nav-item dropdown">
      <button className="nav-icon dropdown-toggle bg-transparent border-0" id="alertsDropdown" data-bs-toggle="dropdown">
        <div className="position-relative">
          <FeatherIcon icon="bell" className="align-middle" />
          <span className="indicator">{numNotifications}</span>
        </div>
      </button>

      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
        <div className="dropdown-menu-header">
          {numNotifications} Notificaciones nuevas

        </div>

        <div className="list-group">

          {
            notifications.map((notification, key) => {
              return <NotificationItem key={key}
                        type={notification.type}
                        icon={notification.icon}
                        title={notification.title}
                        text={notification.text}
                        time={notification.time}/>
            })
          }          

        </div>
        <div className="dropdown-menu-footer">
          <Link to="#" className="text-muted">Ver todas las notificaciones</Link>
        </div>

      </div>
    </li>
  )
}

export default NotificationContainer;