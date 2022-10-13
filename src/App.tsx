import React from "react";
import "./App.css";

function App() {
  const [sec, setSec] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [day, setDay] = React.useState(0);

  const timeHandler = () => {
    setSec(sec + 1);
  };

  return (
    <div className="App">
      <div>
        <p>{sec}</p>
        <button onClick={timeHandler}>START</button>
        <button onClick={timeHandler}>STOP</button>
      </div>
    </div>
  );
}

export default App;
