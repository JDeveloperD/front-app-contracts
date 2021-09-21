import React from 'react';

function Alert(props) {
  const { type, message } = props;

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      {message}
    </div>
  )
} 

export default Alert;