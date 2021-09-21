import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import InboxItem from './InboxItem.jsx';

function Inbox(props) {
  
  const { inbox } = props;

  const numMessages = inbox.length;

  return (
    <li className="nav-item dropdown">
      <button className="nav-icon dropdown-toggle bg-transparent border-0" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
        <div className="position-relative">
          <FeatherIcon icon="message-square" className="align-middle" /> 
        </div>
      </button>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
        <div className="dropdown-menu-header">
          <div className="position-relative">
            {numMessages} Mensajes nuevos
          </div>
        </div>
        <div className="list-group">
          {
            inbox.map((message, key) => (
            <InboxItem 
              key={key} 
              avatar={message.avatar} 
              nickName={message.nickName}
              message={message.message}
              date={message.date} 
            />) )
          }
          
        </div>
        <div className="dropdown-menu-footer">
          <Link to="#" className="text-muted">Ver todos los mensajes</Link>
        </div>
      </div>
    </li>
  );
}

export default Inbox;