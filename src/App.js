
import React, { Component } from 'react'
import ReactDOM from "react-dom";
import "./index.css"

class App extends React.Component {
 state = {
      num: "Enter Value"
    }
    
 
  changeNum = e => {
    e.preventDefault()
    this.setState({
      num: this.state.num
    });
  };

  render(){
    console.log(this.props)
  return (
    <div className="App" style={{backgroundColor: "grey"}}>
        <div className="calculator-container" style={{backgroundColor: "aliceblue"}}>
          <div className="display-container" style={{backgroundColor: "beige"}}>
            <div className="display" id="display" style={{ backgroundColor: "bisque" }}>
             Current Value:{this.state.num}
            </div>
          </div>
          <div className="button-container" style={{backgroundColor: "beige"}}>
            <NumberButtonSection changeNum={this.changeNum}/>
            <OperatorButton />
          </div>
        </div>
    </div>
  );
}}



const NumberButtonSection = (props) => {
  console.log(props.changeNum)
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const numButtons = nums.map(num => 
    <NumberButton value={num} key={num} id={num} changeNum={props.changeNum} />
    );
    return (
      <div className="buttons" id="number-buttons">
        {numButtons}
      </div>
    )
}
const NumberButton = (props) => {
  
  return (
      <button className="button" id="number-button" onClick={props.changeNum}>
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
