import * as React from "react";

const useCountDown = (targetDate: string) => {
  const countDownDate: Date = new Date(targetDate);
  const countDownTime: number = countDownDate.getTime();

  const [countDown, setCountDown] = React.useState<number>();
};
