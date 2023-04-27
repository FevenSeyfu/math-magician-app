import React from 'react';
import CalculatorKey from './CalculatorKey';
import '../Calculator.css';

const Calculator = () => (
  <section className="calculator">
    <div className="calculator-output">
      <div className="calculator-screen">0</div>
    </div>
    <div className="Calculator-buttons">
      <div className="calculator-functions">
        <CalculatorKey BtnValue="AC" />
        <CalculatorKey BtnValue="+/-" />
        <CalculatorKey BtnValue="%" />
      </div>
      <div className="calculator-operators">
        <CalculatorKey BtnValue="/" />
        <CalculatorKey BtnValue="x" />
        <CalculatorKey BtnValue="-" />
        <CalculatorKey BtnValue="+" />
        <CalculatorKey BtnValue="=" />
      </div>
      <div className="calculator-numbers">
        <CalculatorKey BtnValue="7" />
        <CalculatorKey BtnValue="8" />
        <CalculatorKey BtnValue="9" />
        <CalculatorKey BtnValue="4" />
        <CalculatorKey BtnValue="5" />
        <CalculatorKey BtnValue="6" />
        <CalculatorKey BtnValue="1" />
        <CalculatorKey BtnValue="2" />
        <CalculatorKey BtnValue="3" />
        <CalculatorKey BtnValue="." className="btn-point" />
        <CalculatorKey BtnValue="0" className="btn-zero" />
      </div>
    </div>
  </section>
);

export default Calculator;
