import React, { useState } from "react";
import Color from "./Color";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#0ff1ce").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Tints & Shades</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#0ff1ce"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            generate !
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <Color key={index} {...color} index={index} hex={color.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
