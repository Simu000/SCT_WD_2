import React from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

function ButtonGrid(props) {
  return (
    <div className="grid grid-cols-4 gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
      <div className="col-span-2">
        <button
          onClick={props.onClear}
          className="w-full h-16 rounded-lg bg-red-900/80 hover:bg-red-800 text-xl 
                   font-orbitron text-red-200 border border-red-700/50
                   transition-all duration-200 hover:scale-105 active:scale-95"
        >
          AC
        </button>
      </div>
      <button
        onClick={props.onDelete}
        className="h-16 rounded-lg bg-amber-900/80 hover:bg-amber-800 text-xl 
                 font-orbitron text-amber-200 border border-amber-700/50
                 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        ⌫
      </button>
      <OperatorButton text="÷" value="/" onClick={props.onOperator} />

      <NumberButton text="7" value="7" onClick={props.onNumber} />
      <NumberButton text="8" value="8" onClick={props.onNumber} />
      <NumberButton text="9" value="9" onClick={props.onNumber} />
      <OperatorButton text="×" value="*" onClick={props.onOperator} />

      <NumberButton text="4" value="4" onClick={props.onNumber} />
      <NumberButton text="5" value="5" onClick={props.onNumber} />
      <NumberButton text="6" value="6" onClick={props.onNumber} />
      <OperatorButton text="-" value="-" onClick={props.onOperator} />

      <NumberButton text="1" value="1" onClick={props.onNumber} />
      <NumberButton text="2" value="2" onClick={props.onNumber} />
      <NumberButton text="3" value="3" onClick={props.onNumber} />
      <OperatorButton text="+" value="+" onClick={props.onOperator} />

      <NumberButton text="0" value="0" onClick={props.onNumber} />
      <button
        onClick={props.onDecimal}
        className="h-16 rounded-lg bg-metal-button text-xl font-orbitron 
                 text-gray-200 hover:text-white border border-gray-700/50
                 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        .
      </button>
      <div className="col-span-2">
        <button
          onClick={props.onEquals}
          className="w-full h-16 rounded-lg bg-green-900/80 hover:bg-green-800 text-xl 
                   font-orbitron text-green-200 border border-green-700/50
                   transition-all duration-200 hover:scale-105 active:scale-95 animation-glow"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default ButtonGrid;
