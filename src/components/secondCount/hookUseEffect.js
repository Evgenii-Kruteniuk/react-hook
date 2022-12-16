import React, { useEffect, useState } from "react";
import "./hookUseEffect.css";

function SecondCount(props) {
  const [state, setState] = useState(props.counter);
  const [test, setTest] = useState(0);

  /*В данном случае мы использыем useEffect только 
  при обновлении стейта test. Что и видим в консоли */

  useEffect(() => {
    document.title = `Counter: ${test}`;
    console.log("Change");
  }, [test]);

  const onChangeCounter = (e) => {
    setState((state) => state + e);
  };
  const onResetCounter = () => {
    setState(props.counter);
  };

  const onRandomCounter = (min, max) => {
    /*Задаем мин и макс число. Мин число округляем
    в больш сторону, максимальное в меньшую*/
    min = Math.ceil(min);
    max = Math.floor(max);
    /*Запускаем ф-ю, округляем в меньшую сторону. 
    Генерируем рандомное число от 0 до 1.
    Умножаем его на выр-е (max - min + 1) + min*/
    setState(Math.floor(Math.random() * (max - min + 1) + min));
  };

  return (
    <div className="secondComponent">
      <h1>Счетчик: {state}</h1>
      <h1>Счетчик: {test}</h1>
      <div className="buttons">
        <button onClick={() => onChangeCounter(1)} className="btn btn-success">
          Добавить
        </button>
        <button onClick={() => onChangeCounter(-1)} className="btn btn-danger">
          Удалить
        </button>
        <button
          onClick={() => onRandomCounter(-100, 100)}
          className="btn btn-success"
        >
          Рандом
        </button>
        <button onClick={() => onResetCounter()} className="btn btn-danger">
          Сбросить
        </button>
        <button
          onClick={() => setTest(Math.floor(Math.random() * 100))}
          className="btn btn-success"
        >
          useEffect
        </button>
      </div>
    </div>
  );
}

export default SecondCount;
