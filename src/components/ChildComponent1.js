import React from "react";

const ChildComponent1 = ({ onSelect }) => {
  return (
    <div style={{backgroundColor: 'red', padding: '15px'}}>
        <h2>Child Component 1</h2>
      <button onClick={() => onSelect("Option 1")}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
