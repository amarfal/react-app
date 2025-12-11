import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCount, setChangeCount] = useState(0);

  const onButtonClick = (color) => () => {
    if (color !== backgroundColor) {
      setBackgroundColor(color);
      setChangeCount(changeCount + 1);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <div style={{ color: "#000", fontSize: "1.25rem", marginBottom: "1rem" }}>
        Background changed {changeCount} {changeCount === 1 ? "time" : "times"}
      </div>

      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}

          <div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: color,
              borderRadius: "50px",
            }}
          ></div>
        </button>
      ))}
    </div>
  );
}

export default App;
