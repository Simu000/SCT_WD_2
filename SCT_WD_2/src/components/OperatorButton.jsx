import React from 'react';

function OperatorButton(props) {
  function handleClick() {
    props.onClick(props.value);
  }

  return (
    <button 
      className="operator-button w-full h-16 rounded-lg bg-metal-button text-xl font-orbitron 
                 text-cyan-400 hover:text-cyan-300 transition-all duration-200 
                 hover:scale-105 active:scale-95 border border-cyan-800/50
                 flex items-center justify-center"
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}

export default OperatorButton;