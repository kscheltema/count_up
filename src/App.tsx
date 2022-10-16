import React from "react";
import "./App.css";

function App() {
  const [[day, hour, min, sec], setTime] = React.useState([0, 0, 0, 0]);
  const [timeRunning, setTimeRunning] = React.useState(false);

  const runHandler = () => {
    setTimeRunning(!timeRunning);
  };

  const resetHandler = () => {
    setTime([0, 0, 0, 0]);
  };

  const tick = React.useCallback(() => {
    if (day === 0 && hour === 0 && min === 0 && sec === 0) {
      resetHandler();
    } else if (hour === 0 && min === 0 && sec === 0) {
      setTime([day + 1, hour, min, sec]);
    } else if (min === 0 && sec === 0) {
      setTime([day, hour + 1, min, sec]);
    } else if (sec === 0) {
      setTime([day, hour, min + 1, sec]);
    } else {
      setTime([day, hour, min, sec + 1]);
    }
  }, [day, hour, min, sec]);

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <div className="App">
      <div>
        <p>
          {day ? `":" ${day}` : ""}
          {hour ? `":" ${hour}` : ""}
          {min}:{sec}
        </p>
        <button onClick={runHandler}>RUN</button>
        <button onClick={resetHandler}>RESET</button>
      </div>
    </div>
  );
}

export default App;
