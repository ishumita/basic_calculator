import React from 'react';
import Button from './button';
import Screen from './screen';
import './../styles/App.css';
import './../styles/button.css';

const dupOpRegex = /[+/*]?-?\d+\.?\d*/g;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: "0",
      operator: false,
      decimalFlag: false,
      res: "0"
    }
    
  }
  
  handleClick = (button) => {
    let current = this.state.current
    let operator = this.state.operator
    switch(true) {
      case button === "0" ||
          button === "1" ||
          button === "2" ||
          button === "3" ||
          button === "4" ||
          button === "5" ||
          button === "6" ||
          button === "7" ||
          button === "8" ||
          button === "9":
      if(this.state.current !=="0") {
        current += button
        operator = false
      }
      else {
        current = button
      }
      break

      case button === "+" ||
      button === "-" ||
      button === "*" ||
      button === "/" :
          if(!this.state.operatorFlag){
            current += button
         
            this.setState({decimalFlag:false})
          }else{
            const newNumber = current.slice(0,current.length-1)
            current = newNumber
            current += button
          }
          break

      case button === "AC":
        current = "0"
        operator = false
        this.setState({decimalFlag:false})
        break

      case button === "=":
        console.log(current.match(dupOpRegex))
        current = eval(current.match(dupOpRegex).join(''))
        operator = false
        this.setState({decimalFlag:true})

        break
      
      case button === ".":
        if(!this.state.decimalFlag) {
          current += "."
          this.setState({decimalFlag:true})
        }
    }

    this.setState({operator})
    this.setState({current})
}
  
  render() {
    const buttons = ['AC', '=','*', '7', '8', '9', '-', '4', '5', '6','+', '1',
  '2', '3','0', '.', '/']

  var pr = ["clear", "equals", "multiply", "seven", "eight", "nine", "subtract", "four", "five", "six", "add", "one",
 "two", "three", "zero", "decimal", "divide"]
 
  return (
    <div className="App">
     <h1 className="heading">Calculator</h1>
     <div className="calculator">
     <Screen current={this.state.current} />
     <div className="btn-container">
  {buttons.map((item, index) => 
      <Button id = {pr[index]} handleClick = {this.handleClick} name = {item} key ={index} />
       
     )}
     </div>
     </div>
    </div>
  );
  }
}

export default App;
