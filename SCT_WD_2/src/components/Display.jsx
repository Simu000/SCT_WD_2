import React from 'react';

function Display(props) {
  return (
    <div className="bg-display p-4 rounded-lg mb-4 border-robot h-20 flex items-center justify-end overflow-hidden">
      <span className="text-3xl font-orbitron text-cyan-300 text-glow truncate">
        {props.value}
      </span>
    </div>
  );
}

export default Display;