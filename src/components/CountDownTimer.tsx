import React from "react";
import { useCountDown } from "../hooks/useCountDown";
import Message from "./Message";
import ShowCount from "./ShowCount";

interface CountDate {
  targetDate: any;
}

const CountDownTimer: CountDate = ({ targetDate }) => {
  const [days, hours, min, sec] = useCountDown(targetDate);

  if (days + hours + min + sec <= 0) {
    return <ShowCount /> && <Message />;
  } else {
    return <ShowCount />;
  }
};

export default CountDownTimer;
