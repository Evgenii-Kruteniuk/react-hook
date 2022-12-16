import { useState, useEffect, useMemo } from "react";

function complexComputed(e) {
  console.log("Computing");
  let i = 0;
  while (i < 1000000000) i++;
  return e * 2;
}

function Color() {
  const [num, setNum] = useState(24);
  const [color, setColor] = useState(false);

  const stylz = useMemo(
    (e) => ({
      color: color ? "red" : "black",
    }),
    [color]
  );

  const compute = useMemo((e) => complexComputed(num), [num]);

  useEffect((e) => console.log("Change style"), [stylz]);

  return (
    <div>
      <h1 style={stylz}>Сложные вычисления равны: {compute}</h1>
      <input
        type="button"
        value="increase useMemo"
        onClick={(e) => setNum(num + 1)}
      />
      <input
        type="button"
        value="decrease useMemo"
        onClick={(e) => setNum(num - 1)}
      />
      <input
        type="button"
        value="change color"
        onClick={(e) => setColor(!color)}
      />
    </div>
  );
}

export default Color;
