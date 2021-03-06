import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/styles/app.scss';
import './modules/bootstrap';
import './modules/sidebar';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
  
