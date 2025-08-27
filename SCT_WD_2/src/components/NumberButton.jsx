import React from 'react';

function NumberButton(props) {
  function handleClick() {
    props.onClick(props.value);
  }

  return (
    <button 
      className="number-button w-full h-16 rounded-lg bg-metal-button text-xl font-orbitron 
                 text-gray-200 hover:text-white transition-all duration-200 
                 hover:scale-105 active:scale-95 border border-gray-700/50
                 flex items-center justify-center"
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}

export default NumberButton;