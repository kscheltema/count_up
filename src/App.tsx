import React from "react";
import "./App.css";

function App() {
  const [sec, setSec] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [timeRunning, setTimeRunning] = React.useState(false);

  const startHandler = () => {
    setTimeRunning(!timeRunning);
  };

  React.useEffect(() => {
    if (timeRunning) {
      setInterval(() => {
        setSec(sec + 1);
      }, 1000);
      setInterval(() => {
        setMin(min + 1);
      }, 60000);
      setInterval(() => {
        setHour(hour + 1);
      }, 3600000);
      setInterval(() => {
        setDay(day + 1);
      }, 86400000);
    }
  }, [sec, min, hour, day, timeRunning]);

  return (
    <div className="App">
      <div>
        <p>
          {day ? `":" ${day}` : ""}
          {hour ? `":" ${hour}` : ""}
          {min}:{sec}
        </p>
        <button onClick={startHandler}>START</button>
        <button onClick={startHandler}>STOP</button>
      </div>
    </div>
  );
}

export default App;
