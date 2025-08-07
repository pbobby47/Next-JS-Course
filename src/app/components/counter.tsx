"use client"

import { useState } from "react";

const Counter = () => {
    console.log("Counter Component")
  let [counter, setCounter] = useState(0);

  return (
    <h1>
      <button onClick={() => setCounter(counter++)}>
        You Clicked {counter} times
      </button>
    </h1>
  );
};

export default Counter;
