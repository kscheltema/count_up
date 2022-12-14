import * as React from "react";

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

const useCountDown = (targetDate: string) => {
  const countDownDate: Date = new Date(targetDate);
  const countDownTime: number = countDownDate.getTime();

  // Here you want you time minus the current time. (positive if future negative if time since)
  const [countDown, setCountDown] = React.useState<number>(
    countDownTime - Date.now()
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      // here you want the same as above because it will change every second.
      setCountDown(countDownTime - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownTime]);

  return getReturnValues(countDown);
  //you were missing this curly bracket which caused the issue below.
};
// here you have put an "external function" within your current function
// put this at the top for easier readability

export { useCountDown };
