import React from 'react';
import Button from './button';
import Screen from './screen';
import './../styles/App.css';
import './../styles/button.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: [],
      result: 0,
      operator: '+'
    }
    
  }
  
  doMath = (num1, operator, num2) => {

    let result = this.state.result
    if (!isNaN(num2)) {
     result = eval(num1+operator+num2)
      this.setState({result})
    }
    
  }
  handleClick = (button) => {
    let current = [...this.state.current]
    const result = this.state.result
    let operator = this.state.operator
    const num = parseFloat(current.join(''))

    switch(true) {

      
      case /[+*-/=]/.test(button):
        this.doMath(result, operator, num)
        operator = button
        current = operator
        break
      case /\d/.test(button):
        if (/[\+\*\-\/]/.test(current.join(''))){ 
          current =[]
        }
        current.push(button)
        break
      case /[AC]/.test(button): 
      this.setState({result:0, result: 0, current: []})
        return 
      }
  this.setState({current, operator})
}
  
  render() {
    const buttons = ['AC', '=','*', '7', '8', '9', '-', '4', '5', '6','+', '1',
  '2', '3','0', '.', '/']
  return (
    <div className="App">
     <h1 className="heading">Calculator</h1>
     <div className="calculator">
     <Screen current={this.state.current}  result={this.state.result}/>
     <div className="btn-container">
     { buttons.map((item, i) => <Button handleClick={this.handleClick} key = {i} name = {item} />)}
     </div>
     </div>
    </div>
  );
  }
}

export default App;
