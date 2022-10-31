import React from "react";
import { useCountDown } from "../hooks/useCountDown";
import ShowCount from "./ShowCount";
import Flash from "./Flash";

type OwnProps = {
  targetDate: string;
};

const CountDownTimer: React.FC<OwnProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <Flash />;
  } else {
    return <ShowCount />;
  }
};

export default CountDownTimer;
