import React from "react";
import "./App.css";
import CountDownTimer from "./components/CountDownTimer";

function App() {
  return (
    <div className="App">
      <CountDownTimer targetDate={"2023-01-01 23:59:59"} />
    </div>
  );
}

export default App;
