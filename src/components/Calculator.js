import React, { useState } from 'react';
import '../Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.innerText));
  };

  const { total, next } = state;
  const display = next || total || '0';
  return (
    <div className="calculator-container">
      <section className="left-section">
        <h3>Let&apos;s do some math!</h3>
      </section>
      <section className="calculator right-section">
        <div className="calculator-output">
          <div className="calculator-screen">{display}</div>
        </div>
        <div className="Calculator-buttons">
          <div className="calculator-functions">
            <button type="button" onClick={handleClick}>AC</button>
            <button type="button" onClick={handleClick}>+/-</button>
            <button type="button" onClick={handleClick}>%</button>
          </div>
          <div className="calculator-operators">
            <button type="button" onClick={handleClick}>÷</button>
            <button type="button" onClick={handleClick}>x</button>
            <button type="button" onClick={handleClick}>-</button>
            <button type="button" onClick={handleClick}>+</button>
            <button type="button" onClick={handleClick}>=</button>
          </div>
          <div className="calculator-numbers">
            <button type="button" onClick={handleClick}>7</button>
            <button type="button" onClick={handleClick}>8</button>
            <button type="button" onClick={handleClick}>9</button>
            <button type="button" onClick={handleClick}>3</button>
            <button type="button" onClick={handleClick}>5</button>
            <button type="button" onClick={handleClick}>6</button>
            <button type="button" onClick={handleClick}>1</button>
            <button type="button" onClick={handleClick}>2</button>
            <button type="button" onClick={handleClick}>3</button>
            <button type="button" onClick={handleClick} className="btn-point">.</button>
            <button type="button" onClick={handleClick} className="btn-zero">0</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Calculator;
