import './App.css';
import React from 'react';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: '',
      operation: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.clear = this.clear.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidUpdate(){
  //   console.log(this.state.operation)
  // }

  handleClick(event) {
    let stringOperation = event.target.value
    this.setState({ display: this.state.display + stringOperation })
    if(stringOperation === 'x') stringOperation = '*'
    this.setState({ operation: this.state.operation + stringOperation })
  }

  handleSubmit(){
    if(this.state.operation === '') return
    let result = eval(this.state.operation)
    console.log(result)
    
    this.setState({
      display: String(result),
      operation: String(result)
    })
  }

  clear() {
    this.setState({
      display: '',
      operation: ''
    })
  }

  render() {
    return (
    <div className="App">
      <Calculator clear={this.clear} handleClick={this.handleClick} display={this.state.display} handleSubmit={this.handleSubmit}/>  
    </div>
  );
  }
}

export default App;
