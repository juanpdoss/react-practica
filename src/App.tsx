import React, {    useState } from "react";
import "./App.css";



const FirstChild = () => {
  return (
    <div>
      <button onClick={()=>{}}>
        ¡Cambiame el color!
      </button>

      <input type="color"  />
    </div>
  );
};

const SecondChild = () => {
  return (
    <div>
      <input type="text" />
      <button>¡Cambiame el texto!</button>
    </div>
  );
};

function App() {



  return (
    <div className="App">
      <FirstChild />
      <SecondChild />

      <textarea name="" id="" cols="30" rows="10"></textarea>

    </div>
  );
}

export default App;
