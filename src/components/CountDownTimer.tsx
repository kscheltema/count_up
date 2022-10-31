import React from "react";
import { useCountDown } from "../hooks/useCountDown";
import ShowCount from "./ShowCount";
import Flash from "./Flash";

const CountDownTimer: React.FC<unknown> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown<number>(targetDate);

  days + hours + minutes + seconds <= 0 ? <Flash /> : <ShowCount />;
};

export default CountDownTimer;
