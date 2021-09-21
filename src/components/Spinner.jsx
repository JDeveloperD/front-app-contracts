import React from 'react';

function Spinner(props) {
  const { color, size } = props;

  return (
    <div className={`spinner-border spinner-border-${size} text-${color}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spinner;