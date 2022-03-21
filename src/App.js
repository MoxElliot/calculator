
import React, { Component } from 'react'
import ReactDOM from "react-dom";
import "./index.css"

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lastDisplay: "Enter Value",
      fullDisplay: [1, 2]
    }
  }
 
   onNumberKeyClick = (e) => {
   
    console.log(this.state.lastDisplay)
    console.log(this.state.fullDisplay)
    if((e.key >= 0) && (e.key <= 9)) 
    { 
    this.setState({
      lastDisplay: e.key,
      fullDisplay: [...this.state.fullDisplay, e.key] //  https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array  using es6 notation w/spread operator to "push" into state array
    });
    
  }}


  changeNum = (numberKey) => {        {/*// https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/ 
callback function to pass state (child data = numberKey) up from child component (NumberButtonSection)*/}
    
    this.setState({
      lastDisplay: numberKey,
      fullDisplay: [...this.state.fullDisplay, numberKey] 
      
    });
  };

  render(){
    
  return (
    <div className="App" style={{backgroundColor: "grey"}} onKeyPress={this.onNumberKeyClick}>
        <div className="calculator-container" style={{backgroundColor: "aliceblue"}}>
          <div className="display-container" style={{backgroundColor: "beige"}}>
            <div className="display" id="display" style={{ backgroundColor: "bisque" }}>
             Current Value:{this.state.lastDisplay}
            </div>
            <div className="display" id="display" style={{ backgroundColor: "bisque" }}>
             ::{this.state.fullDisplay}
            </div>
          </div>
          <div className="button-container" style={{backgroundColor: "beige"}}>  
            <NumberButtonSection numberToDisplay={this.changeNum}/> {/* passing callback function from child as a props from teh parent component*/}
            <OperatorButton />
          </div>
        </div>
    </div>
  );
}}



const NumberButtonSection = (props) => {
  
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const numButtons = nums.map(num => 
    <NumberButton value={num} key={num} id={num} numberToDisplay={props.numberToDisplay} />
    );
    return (
      <div className="buttons" id="number-buttons">
        {numButtons}
      </div>
    )
}
const NumberButton = (props) => {

  const onNumberButtonPush = (e) => {   {/* child compoenet calls the parent callback using props and passes data back to parent */}
    props.numberToDisplay(props.value);
    e.preventDefault()
  }

  return (
      <button className="button" id="number-button" onClick={onNumberButtonPush}>
        {props.value}
      </button>
  )
}

const OperatorButton = () => {
  return (
<div className="buttons" id="operator-buttons">
  <button id="add" className="button">
  +
</button>
<button id="clear" className="button">
  AC
</button>
<button id="zero" className="button">
  0
</button>
<button id="decimal" className="button">
  .
</button>
<button id="equals" className="button">
  =
</button>
<button id="subtract" className="button">
  -
</button>
</div>

)
}
export default App;
