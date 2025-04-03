
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent" style={{backgroundColor: 'lightgreen', padding: '15px', width: '50%'}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
      <ChildComponent1 onSelect={handleSelection} />
      <ChildComponent2 onSelect={handleSelection} />
      <p>Selected Option: {selectedOption || ""}</p>
    </div>
  )
}

export default App
