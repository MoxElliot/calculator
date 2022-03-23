
import React, { Component } from 'react'
import ReactDOM from "react-dom";
import "./index.css"

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lastDisplay: "Enter Value",
      fullDisplay: 0
    }
  
  this.onNumberKeyClick = this.onNumberKeyClick.bind(this);
  this.changeDisplay = this.changeDisplay.bind(this);
}
   onNumberKeyClick = (e) => {
   
    if((e.key >= 0) && (e.key <= 9)) 
    { 
    this.setState({
      lastDisplay: e.key,
      fullDisplay: [...this.state.fullDisplay, e.key] //  https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array  using es6 notation w/spread operator to "push" into state array
    });
    
  }}


  changeDisplay = (displayKey, e) => {  
    e.preventDefault();
    const operators = ["+", "-", "x", "/", "."]; 
    const regex = /(\d*\.+\d*\.+\d*)/mgi
    
    if (this.state.fullDisplay === 0  && displayKey !== 0) {
     
      this.setState({
        lastDisplay: displayKey,
        fullDisplay: [displayKey] 
    })} else if (this.state.fullDisplay === 0  && displayKey === 0) {
      this.setState({
        lastDisplay: "Leading Zeros Not Allowed",
        fullDisplay: this.state.fullDisplay
    })} else if (operators.includes(this.state.fullDisplay[this.state.fullDisplay.length-1]) && operators.includes(displayKey)) {
      this.setState({
        lastDisplay: displayKey,
        fullDisplay: [...this.state.fullDisplay.filter((_, i) => i !== this.state.fullDisplay.length-1), displayKey]
    })} else if  ([...this.state.fullDisplay, displayKey].join("").match(regex) === true) {
      console.log("hello")
      this.setState({
        lastDisplay: "Multiple Decimals Not Allowed",
        fullDisplay: this.state.fullDisplay
    })} else {
    this.setState({
      lastDisplay: displayKey,
      fullDisplay: [...this.state.fullDisplay, displayKey] 
    })}
  };

  clearDisplay = () => { 
    
    this.setState({
      lastDisplay: "Enter Value",
      fullDisplay: 0 
      
    });
  };

  evaluateDisplay = () => {       
  
    const equation = this.state.fullDisplay.join("").replaceAll("x", "*")
    this.setState({
      lastDisplay: "Enter Value",
      fullDisplay: [eval(equation)] 
      
    });
  };

  render(){
    
  return (
    <div className="App" style={{backgroundColor: "grey"}} onKeyPress={this.onNumberKeyClick}>
        <div className="calculator-container" style={{backgroundColor: "aliceblue"}}>
          <div className="display-container" style={{backgroundColor: "beige"}}>
            <div className="display" id="current-display" style={{ backgroundColor: "bisque" }}>
             Current Value: {this.state.lastDisplay}
            </div>
            <div className="display" id="display" style={{ backgroundColor: "bisque" }}>
             {this.state.fullDisplay}
            </div>
          </div>
          <div className="button-container" style={{backgroundColor: "beige"}}>  
            <NumberButtonSection numberToDisplay={this.changeDisplay}/> {/* passing callback function from child as a props from the parent component*/}
            
            <div className="buttons" id="operator-buttons">
            <OperatorButtonSection operatorToDisplay={this.changeDisplay} />
            <ClearButton value={"AC"} key={"AC"} id={"AC"} operatorToDisplay={this.clearDisplay}/>
            <EqualButton value={"="} key={"="} id={"equals"} operatorToDisplay={this.evaluateDisplay}/> 
            </div>

          </div>
        </div>
    </div>
  );
}}



const NumberButtonSection = (props) => {
  
  const nums = [[0, "zero"], [1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"], [6, "six"], [7, "seven"], [8, "eight"], [9, "nine"]]
  const numButtons = nums.map(num => 
    <NumberButton value={num[0]} key={num[0]} id={num[1]} numberToDisplay={props.numberToDisplay} />
    );
    return (
      <div className="buttons" id="number-buttons">
        {numButtons}
      </div>
    )
}
const NumberButton = (props) => {

  const onButtonPush = (e) => {   /* child compoenet calls the parent callback using props and passes data back to parent */

    props.numberToDisplay(props.value);
    e.preventDefault()
  }
 
  return (
      <button className="button" id={props.id}onClick={onButtonPush}>
        {props.value}
      </button>
  )
}

const OperatorButtonSection = (props) => {
  
  const ops = [["x", "multiply"], ["/", "divide"], ["+", "add"], ["-", "subtract"], [".", "decimal"]]
  const opsButtons = ops.map(op => 
    <OperatorButton value={op[0]} key={op[0]} id={op[1]} operatorToDisplay={props.operatorToDisplay} />
    );
    return (
      <>
        {opsButtons}
        
      </>
    )
}
const OperatorButton = (props) => {

  const onButtonPush = (e) => {   /* child compoenet calls the parent callback using props and passes data back to parent */
 
    props.operatorToDisplay(props.value);
    e.preventDefault()
  }

  return (
      <button className="button" id={props.id} onClick={onButtonPush}>
        {props.value}
      </button>
  )
}

const ClearButton = (props) => {
  const onButtonPush = (e) => {   /* child compoenet calls the parent callback using props and passes data back to parent */
 
  props.operatorToDisplay(props.value);
  e.preventDefault()
}
  return (
  <button id="clear" className="button" onClick={onButtonPush}>
    AC
  </button>
)}

const EqualButton = (props) => {

  const onButtonPush = (e) => {   /* child compoenet calls the parent callback using props and passes data back to parent */
 
  props.operatorToDisplay(props.value);
  e.preventDefault()
}
  return (

<button id="equals" className="button" onClick={onButtonPush}>
  =
</button>
)}
export default App;
