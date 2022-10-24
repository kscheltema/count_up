import React from "react";

function CountUp() {
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
      setTime(() => [day + 1, hour, min, sec]);
    } else if (min === 0 && sec === 0) {
      setTime(() => [day, hour + 1, min, sec]);
    } else if (sec === 0) {
      setTime(() => [day, hour, min + 1, sec]);
    } else {
      setTime(() => [day, hour, min, sec + 1]);
    }
  }, [day, hour, min, sec]);

  React.useEffect(() => {
    if (timeRunning) {
      setInterval(() => tick(), 1000);
      console.log(tick, timeRunning);
    } else {
      console.log(tick, timeRunning);
      resetHandler();
    }
  }, [tick, timeRunning]);

  return (
    <div>
      <p>
        {day ? `":" ${day}` : ""}
        {hour ? `":" ${hour}` : ""}
        {min}:{sec}
      </p>
      <button onClick={runHandler}>RUN</button>
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
}

export default CountUp;