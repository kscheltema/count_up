import * as React from "react";

const useCountDown = (targetDate: string) => {
  const countDownDate: Date = new Date(targetDate);
  const countDownTime: number = countDownDate.getTime();

  const [countDown, setCountDown] = React.useState<number>(
    countDownDate - countDownTime
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - countDownTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownTime, countDownDate]);

  return getReturnValues(countDown);

  const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    return [days,hours,minutes,seconds]
};

export {useCountDown}
