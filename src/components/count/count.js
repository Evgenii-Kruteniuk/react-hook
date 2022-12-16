import React, { useState } from "react";
import "./count.css";

function Count() {
  const [counter, setCounter] = useState(5);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter((el) => el - 1);
    setCounter((el) => el - 2);
  }

  return (
    <div className="firstComponent">
      <h1>Счетчик: {counter}</h1>
      <div className="buttons">
        <button onClick={increment} className="btn btn-success">
          Добавить
        </button>

        <button onClick={decrement} className="btn btn-danger">
          Удалить
        </button>
      </div>
    </div>
  );
}

export default Count;
