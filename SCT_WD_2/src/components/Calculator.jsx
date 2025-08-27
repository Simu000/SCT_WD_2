import React, { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  function getDisplayOperator(operator) {
    if (operator === "*") return "×";
    if (operator === "/") return "÷";
    return operator;
  }

  function handleNumber(number) {
    if (waitingForOperand) {
      setCurrentValue(number);
      setDisplay(display + number);
      setWaitingForOperand(false);
    } else {
      if (currentValue === "0") {
        setCurrentValue(number);
        setDisplay(operation ? display + number : number);
      } else {
        setCurrentValue(currentValue + number);
        setDisplay(display + number);
      }
    }
  }

  function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentValue);
    const displayOperator = getDisplayOperator(nextOperator);

    if (previousValue === null) {
      setPreviousValue(inputValue);
      setDisplay(display + displayOperator);
    } else if (operation) {
      const result = performCalculation();
      setCurrentValue(String(result));
      setPreviousValue(result);
      setDisplay(String(result) + displayOperator);
    } else {
      setDisplay(display + displayOperator);
    }

    setWaitingForOperand(true);
    setOperation(nextOperator);
  }

  function performCalculation() {
    const inputValue = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    if (operation === "+") return previous + inputValue;
    if (operation === "-") return previous - inputValue;
    if (operation === "*") return previous * inputValue;
    if (operation === "/") {
      if (inputValue === 0) return "Error";
      return previous / inputValue;
    }
    return inputValue;
  }

  function handleEquals() {
    if (previousValue === null || operation === null) return;
    const result = performCalculation();
    setDisplay(String(result));
    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  }

  function handleClear() {
    setDisplay("0");
    setCurrentValue("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  }

  function handleDelete() {
    if (currentValue.length > 1) {
      const newValue = currentValue.slice(0, -1);
      setCurrentValue(newValue);
      setDisplay(display.slice(0, -1));
    } else {
      setCurrentValue("0");
      setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    }
  }

  function handleDecimal() {
    if (waitingForOperand) {
      setCurrentValue("0.");
      setDisplay(display + "0.");
      setWaitingForOperand(false);
    } else if (currentValue.indexOf(".") === -1) {
      setCurrentValue(currentValue + ".");
      setDisplay(display + ".");
    }
  }

  return (
    <div
      className="calculator max-w-2xl min-w-xs mx-auto p-6 bg-metal rounded-2xl 
                    border-robot shadow-2xl transform transition-all duration-300 
                    hover:shadow-cyan-900/30"
    >
      <div className="mb-6 relative">
        <div className="absolute -top-5 left-0 right-0 text-center">
          <span className="bg-cyan-900 text-cyan-300 font-orbitron text-sm px-4 py-1 rounded-full">
            ROBO-CALC 3000
          </span>
        </div>
        <Display value={display} />
      </div>
      <ButtonGrid
        onNumber={handleNumber}
        onOperator={handleOperator}
        onEquals={handleEquals}
        onClear={handleClear}
        onDelete={handleDelete}
        onDecimal={handleDecimal}
      />

      <div className="flex justify-between mt-4">
        <div className="h-2 w-8 bg-cyan-500 rounded-full opacity-50"></div>
        <div className="h-2 w-8 bg-cyan-500 rounded-full opacity-50"></div>
      </div>
    </div>
  );
}

export default Calculator;
