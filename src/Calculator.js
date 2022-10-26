import React, { useState } from "react";

function Calculator() {
  const [firstNumber, changeFirstNumber] = useState(undefined);
  const [secondNumber, changeSecondNumber] = useState(undefined);
  const [thirdNumber, changeThirdNumber] = useState(undefined);

  const handleClick = (clickedNumber) => {
    if (
      typeof firstNumber !== "undefined" &&
      typeof secondNumber !== "undefined"
    ) {
      changeThirdNumber(clickedNumber);
    } else if (typeof firstNumber !== "undefined") {
      changeSecondNumber(clickedNumber);
    } else {
      changeFirstNumber(clickedNumber);
    }

    changeSecondNumber(clickedNumber);
  };

  return (
    <div>
      <h1>
        {firstNumber} {secondNumber} {thirdNumber}
      </h1>
      <button
        onClick={() => {
          handleClick(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          handleClick(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          handleClick(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          handleClick(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          handleClick(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          handleClick(5);
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          handleClick(6);
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          handleClick(7);
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          handleClick(8);
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          handleClick(9);
        }}
      >
        9
      </button>
      <p>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </p>
      <p>
        <button>=</button>
      </p>
    </div>
  );
}

export default Calculator;
