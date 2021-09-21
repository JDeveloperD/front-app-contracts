import React from 'react';
import { Link } from 'react-router-dom';

function InboxItem(props) {

  const { avatar, nickName, message, date } = props;

  return (
    <Link to="#" className="list-group-item">
      <div className="row g-0 align-items-center">
        <div className="col-2">
          <img src={avatar} className="avatar img-fluid rounded-circle" alt={nickName} style={{objectFit:"cover"}}/>
        </div>
        <div className="col-10 ps-2">
          <div className="text-dark">{nickName}</div>
          <div className="text-muted small mt-1">{message}</div>
          <div className="text-muted small mt-1">{date}</div>
        </div>
      </div>
    </Link>
  );
}

export default InboxItem;