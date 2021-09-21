import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

function UserProfileContainer (props) {

  const { nickName , names, avatar } = props;

  return (
    <li className="nav-item dropdown">
      <button className="nav-icon dropdown-toggle d-inline-block d-sm-none bg-transparent border-0" href="#" data-bs-toggle="dropdown">
        <FeatherIcon icon="settings" className="align-middle" />
      </button>

      <Link className="nav-link dropdown-toggle d-none d-sm-inline-block" to="#" data-bs-toggle="dropdown">
        <img src={avatar} className="avatar img-fluid rounded me-1" alt={names} style={{objectFit:"cover"}} />
        <span className="text-dark"> {nickName} </span>
      </Link>

      <div className="dropdown-menu dropdown-menu-end">
        <Link className="dropdown-item" to="pages-profile.html">
          <FeatherIcon icon="user" className="align-middle" /> 
          Perfil
        </Link>

        <Link className="dropdown-item" to="#">
          <FeatherIcon icon="pie-chart" className="align-middle" /> 
          Analítica
        </Link>

        <div className="dropdown-divider"></div>

        <Link className="dropdown-item" to="index.html">
          <FeatherIcon icon="settings" className="align-middle" /> 
          Configuración & Privacidad
        </Link>

        <Link className="dropdown-item" to="#">
          <FeatherIcon icon="help-circle" className="align-middle" /> 
          Central de ayuda
        </Link>
        <div className="dropdown-divider"></div>

        <button className="dropdown-item bg-transparent">Cerrar Sesión</button>
      </div>
    </li>
  )
}

export default UserProfileContainer;