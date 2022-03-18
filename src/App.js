import React from 'react'
import "./index.css"

class App extends React.Component {
  render(){
  return (
    <div className="App" style={{backgroundColor: "grey"}}>
        <div className="calculator-container" style={{backgroundColor: "aliceblue"}}>
          <div className="display-container" style={{backgroundColor: "beige"}}>
            <Display />
          </div>
          <div className="button-container" style={{backgroundColor: "beige"}}>
            <Buttons />
          </div>
        </div>
    </div>
  );
}}

class Display extends React.Component {
  
  render() {
    
    return (
      <><div className="display" id="display" style={{ backgroundColor: "bisque" }}>
       
      </div><div className="display" id="lastOperator" style={{ backgroundColor: "bisque" }}>
      
        </div></>
    )
  }
}

const Buttons = () => {
  return (
    <div className="buttons" style={{backgroundColor: "bisque"}}>
        <button id="nine" className="button">
          9
        </button>
        <button id="eight" className="button">
          8
        </button>
        <button id="seven" className="button">
          7
        </button>
        <button id="divide" className="button">
          /
        </button>
        <button id="six" className="button">
          6
        </button>
        <button id="five" className="button">
          5
        </button>
        <button id="four" className="button">
          4
        </button>
        <button id="multiply" className="button">
          X
        </button>
        <button id="three" className="button">
          3
        </button>
        <button id="two" className="button">
          2
        </button>
        <button id="one" className="button">
          1
        </button>
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
