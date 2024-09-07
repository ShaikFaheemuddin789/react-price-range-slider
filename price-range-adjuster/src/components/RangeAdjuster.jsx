import React from "react";
import { useState } from "react";
const RangeAdjuster = () => {
  const [range, setRange] = useState(50);

  function handleChange(e) {
    setRange(e.target.value);
  }

  return (
    <div>
      <input
        type="range"
        min="10"
        max="1000"
        step="10"
        onChange={handleChange}
      />
      <h1>{range}</h1>
    </div>
  );
};

export default RangeAdjuster;
