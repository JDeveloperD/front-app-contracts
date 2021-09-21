import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

function NotificationItem(props) {

  const { icon, title, text, time, type } = props;

  return (
    <Link to="#" className="list-group-item">
      <div className="row g-0 align-items-center">
        <div className="col-2">
          <FeatherIcon icon={ icon } className={ 'text-' + type }/>
        </div>
        <div className="col-10">
          <div className="text-dark">{ title }</div>
          <div className="text-muted small mt-1">{ text }</div>
          <div className="text-muted small mt-1">{ time }</div>
        </div>
      </div>
    </Link>
  )
}

export default NotificationItem;