import React from "react";
import Count from "./components/count/count";
import Text from "./components/text/text";
import SecondCount from "./components/secondCount/hookUseEffect";
import Image from "./components/image/image";
import "./App.css";
import Color from "./components/useMemo/hookUseMemo";
import Timer from "./components/timer/timer";

function App() {
  return (
    <div>
      <div className="mainPage">
        <Count />
        <Text />
        <SecondCount counter={0} />
        <Image />
        <Color />
        <Timer />
      </div>
    </div>
  );
}

export default App;
