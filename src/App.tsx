import React from "react";
import "./App.css";
import CountDownTimer from "./components/CountDownTimer";

function App(targetDate: string) {
  return (
    <div className="App">
      <CountDownTimer targetDate={targetDate} />
    </div>
  );
}

export default App;
