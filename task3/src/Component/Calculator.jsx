import React, { useState } from "react";
import "./Caculator.css";
const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleButtonClcik = (value) => {
    if (display === "0" && value !== "C") {
      setDisplay(value);
    } else if (value === "C") {
      setDisplay("0");
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("ERROR");
    }
  };
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClcik("7")}>7</button>
          <button onClick={() => handleButtonClcik("8")}>8</button>
          <button onClick={() => handleButtonClcik("9")}>9</button>
          <button className="operator" onClick={() => handleButtonClcik("/")}>
            /
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClcik("4")}>4</button>
          <button onClick={() => handleButtonClcik("5")}>5</button>
          <button onClick={() => handleButtonClcik("6")}>6</button>
          <button className="operator" onClick={() => handleButtonClcik("*")}>
            *
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClcik("1")}>1</button>
          <button onClick={() => handleButtonClcik("2")}>2</button>
          <button onClick={() => handleButtonClcik("3")}>3</button>
          <button className="operator" onClick={() => handleButtonClcik("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClcik("0")}>0</button>
          <button onClick={() => handleButtonClcik(".")}>.</button>
          <button className="clear" onClick={() => handleButtonClcik("C")}>
            C
          </button>
          <button className="operator" onClick={() => handleButtonClcik("+")}>
            +
          </button>
        </div>
        <div className="row">
          <button className="equal" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
