import React from 'react';

function ActionButton(props) {
  return (
    <button className="action-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default ActionButton;