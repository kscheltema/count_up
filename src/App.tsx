import React from "react";
import "./App.css";

function App() {
  const [sec, setSec] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [timeRunning, setTimeRunning] = React.useState(false);

  const startHandler = () => {
    setTimeRunning(true);
  };

  const stopHandler = () => {
    setTimeRunning(false);
  };

  React.useEffect(() => {
    if (timeRunning) {
      setInterval(() => {
        setSec(sec + 1);
      }, 1000);
    }
  }, [sec, timeRunning]);

  return (
    <div className="App">
      <div>
        <p>
          {min}:{sec}
        </p>
        <button onClick={startHandler}>START</button>
        <button onClick={stopHandler}>STOP</button>
      </div>
    </div>
  );
}

export default App;
