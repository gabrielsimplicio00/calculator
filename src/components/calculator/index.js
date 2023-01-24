import React from "react";
import './calculator.css'

class Calculator extends React.Component {
  
  render() {
    return(
      <div className="Calculator">
        <div className="display">{this.props.display}</div>
        <div className="buttons">
          <button className="clear big" value='ac' onClick={this.props.clear}>AC</button>
          <button className="calc-button operation" value='/' onClick={this.props.handleClick}>/</button>
          <button className="calc-button operation" value='x' onClick={this.props.handleClick}>x</button>
          <button className="calc-button" value='7' onClick={this.props.handleClick}>7</button>
          <button className="calc-button" value='8' onClick={this.props.handleClick}>8</button>
          <button className="calc-button" value='9' onClick={this.props.handleClick}>9</button>
          <button className="calc-button operation" value='-' onClick={this.props.handleClick}>-</button>
          <button className="calc-button" value='4' onClick={this.props.handleClick}>4</button>
          <button className="calc-button" value='5' onClick={this.props.handleClick}>5</button>
          <button className="calc-button" value='6' onClick={this.props.handleClick}>6</button>
          <button className="calc-button operation" value='+' onClick={this.props.handleClick}>+</button>
          <button className="calc-button" value='1' onClick={this.props.handleClick}>1</button>
          <button className="calc-button" value='2' onClick={this.props.handleClick}>2</button>
          <button className="calc-button" value='3' onClick={this.props.handleClick}>3</button>
          <button className="calc-button big" value='0' onClick={this.props.handleClick}>0</button>
          <button className="calc-button" value='.' onClick={this.props.handleClick}>.</button>
          <button className="equals" value='=' onClick={this.props.handleSubmit}>=</button>
        </div>
      </div>
    )
  }
}

export default Calculator