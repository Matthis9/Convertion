import React, { useState } from "react";
import Temperature from "/Temperature";

export default function App() {
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [centimeters, setCentimeters] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    const formValid = +feet >= 0 && +inches >= 0;
    if (!formValid) {
      return;
    }
    setCentimeters((+feet + +inches / 12) * 12 * 2.54);
  };
  const Height = () => {
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>feet</label>
          <input value={feet} onChange={(e) => setFeet(e.target.value)} />
        </div>
        <div>
          <label>inches</label>
          <input value={inches} onChange={(e) => setInches(e.target.value)} />
        </div>
        <button type="submit">calculate</button>
      </form>
      <p>{centimeters} cm</p>
    </div>
  );
  }
}
