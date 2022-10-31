import React, { useState } from "react";

function Calculator() {
  const [firstNumber, changeFirstNumber] = useState(undefined);
  const [secondNumber, changeSecondNumber] = useState(undefined);
  const [thirdNumber, changeThirdNumber] = useState(undefined);
  const [operator, changeOperator] = useState(undefined);
  const [calc, changeCalc] = useState(undefined);

  const handleClickNum = (clickedNumber) => {
    if (typeof firstNumber === "undefined") {
      changeFirstNumber(clickedNumber);
    } else {
      changeSecondNumber(clickedNumber);
    }
  };

  const handleClickOp = (clickedOp) => {
    changeOperator(clickedOp);
  };

  const handleClickCalc = (clickedCalc) => {
    changeCalc(clickedCalc);
    if (operator === "+") {
      changeThirdNumber(firstNumber + secondNumber);
    } else if (operator === "-") {
      changeThirdNumber(firstNumber - secondNumber);
    } else if (operator === "*") {
      changeThirdNumber(firstNumber * secondNumber);
    } else if (operator === "/") {
      changeThirdNumber(firstNumber / secondNumber);
    }
  };

  return (
    <div>
      <h1>
        {firstNumber} {operator} {secondNumber} {calc} {thirdNumber}
      </h1>
      <button
        onClick={() => {
          handleClickNum(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          handleClickNum(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          handleClickNum(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          handleClickNum(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          handleClickNum(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          handleClickNum(5);
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          handleClickNum(6);
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          handleClickNum(7);
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          handleClickNum(8);
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          handleClickNum(9);
        }}
      >
        9
      </button>
      <p>
        <button
          onClick={() => {
            handleClickOp("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            handleClickOp("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            handleClickOp("*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            handleClickOp("/");
          }}
        >
          /
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            handleClickCalc("=");
          }}
        >
          =
        </button>
      </p>
    </div>
  );
}

export default Calculator;
