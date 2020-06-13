import React, { useState } from "react";

function App() {
  const [isMousedOver, setMousedOver] = useState(false);
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleMouseOver() {
    setMousedOver(true);
  }

  function handleMouseOut() {
    setMousedOver(false);
  }

  function handleHeading() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        onClick={handleHeading}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
