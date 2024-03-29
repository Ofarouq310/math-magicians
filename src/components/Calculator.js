import React from 'react';
import calculate from '../logic/calculate';
import Quote from './Quote';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.innerHTML));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="main-container">
        <section className="quotes--container">
          <Quote />
        </section>
        <section className="calculator">
          <div id="calculator-display">
            {total}
            {operation}
            {next}
          </div>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-clear">AC</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-sign">+/-</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-percent">%</button>
          <button type="button" onClick={this.handleClick} className="calculator-key orange-key" id="key-division">÷</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-7">7</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-8">8</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-9">9</button>
          <button type="button" onClick={this.handleClick} className="calculator-key orange-key" id="key-multiply">x</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-4">4</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-5">5</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-6">6</button>
          <button type="button" onClick={this.handleClick} className="calculator-key orange-key" id="key-minus">-</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-1">1</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-2">2</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-3">3</button>
          <button type="button" onClick={this.handleClick} className="calculator-key orange-key" id="key-plus">+</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-0">0</button>
          <button type="button" onClick={this.handleClick} className="calculator-key" id="key-dot">.</button>
          <button type="button" onClick={this.handleClick} className="calculator-key orange-key" id="key-equals">=</button>
        </section>
      </div>
    );
  }
}
export default Calculator;
