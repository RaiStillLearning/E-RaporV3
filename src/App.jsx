import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="test button">
        <h1>test menggunakan tailwind</h1>
        <button
          className="bg-pink-500 p-5 rounded text-white hover:bg-pink-700"
          onClick={() => setCount(count + 1)}
        >
          count yang di click {count}
        </button>
      </div>
    </>
  );
}

export default App;
