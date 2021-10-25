import React, { useState } from "react";

export default function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const convert = (e) => {
    e.preventDefault();
    const formValid = !isNaN(+celsius);
    if (!formValid) {
      return;
    }
    setFahrenheit(+celsius * (9 / 5) + 32);
  };
const Temperature = () => {
  return (
    <div className="App">
      <form onSubmit={convert}>
        <div>
          <label>temperature in celsius</label>
          <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />
        </div>
        <button type="submit">convert</button>
      </form>
      <div>
        {celsius}c is {fahrenheit}f
      </div>
    </div>
  );
}
}

export default Temperature;