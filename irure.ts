import React, { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        Change color
      </label>
      
      <div style={{ 
        width: "100px", 
        height: "100px", 
        backgroundColor: isChecked ? "lightblue" : "lightgray" 
      }}>
      </div>
    </div>
  );
}

export default App;
