"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-400">
      <div className="relative w-80 h-80 bg-cyan-200 rounded-lg flex flex-col items-center justify-center">
        <h2 className="absolute top-0 text-black text-xl font-bold w-full text-center  py-2">
          Counter
        </h2>

        <div className="flex items-center space-x-8 text-4xl font-bold">
          <button
            onClick={decrement}
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-800">
            -
          </button>

          <div className="text-black">
            {count}
            </div>

          <button
            onClick={increment}
            className= "bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-950"
          >
            +
          </button>
        </div>

      </div>
    </div>
  );
};

export default Counter;

