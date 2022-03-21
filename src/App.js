
import React, { Component } from 'react'
import ReactDOM from "react-dom";
import "./index.css"

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      num: "Enter Value",
      display: []
    }
  }
 
   onNumberKeyClick = (e) => {
    
    console.log(e.key)
    if((e.key >= 0) && (e.key <= 9)) 
    { console.log("Faaaaaarrt");
    this.setState({
      num: e.key
    });
    
  }}


  changeNum = (numberKey) => {        {/*// https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/ 
callback function to pass state (child data = numberKey) up from child component (NumberButtonSection)*/}
    
    this.setState({
      num: numberKey
    });
  };

  render(){
    
  return (
    <div className="App" style={{backgroundColor: "grey"}} onKeyPress={this.onNumberKeyClick}
      ref={this.ref}>
        <div className="calculator-container" style={{backgroundColor: "aliceblue"}}>
          <div className="display-container" style={{backgroundColor: "beige"}}>
            <div className="display" id="display" style={{ backgroundColor: "bisque" }}>
             Current Value:{this.state.num}
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
