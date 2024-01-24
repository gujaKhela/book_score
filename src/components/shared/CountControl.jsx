import React from "react";
import { useState } from "react";

 const CountControl = ({count,  price, setCount, setPrice,onePeasePrice}) => {

  

    const decrement = () => {
        if (count > 1) {
          setCount((prevCount) => prevCount - 1);
          setPrice(() => onePeasePrice * (count - 1));
        }
      };
    
      const increment = () => {
        setCount((prevCount) => prevCount + 1);
        setPrice(() => onePeasePrice * (count + 1));
      };
  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={decrement}
          className=" outline rounded-full mx-6 p-1 w-6 h-6 grid content-center hover:bg-red-500"
        >
          -
        </button>
        <input
          type="text"
          value={count}
          readOnly
          className="w-10 h-8 text-xl outline rounded-md text-center"
        />

        <button
          onClick={increment}
          className="outline rounded-full mx-6 p-1 w-6 h-6 grid content-center hover:bg-green-500 "
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CountControl
