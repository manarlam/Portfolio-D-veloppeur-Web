import React from 'react';

function Collapse({ title, children, isOpen, onClick }) {
  return (
    <div className="collapse-box">
      <div className="collapse-header" onClick={onClick}>
        <h5>{title}</h5>
      </div>
      <div className={`collapse-content ${isOpen ? 'visible' : ''}`}>
  {children}
</div>
    </div>
  );
}

export default Collapse;