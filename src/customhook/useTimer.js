import { useState } from "react";

function useTimer(duration) {
  let [time, setTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalid, setintervalid] = useState(0);

  let startTimer = () => {
    const intvid = setInterval(() => {
      if (time >= 0) {
        setTime(time--);
        setIsRunning(true);
      } else {
        clearInterval(intvid);
        setIsRunning(false);
        setTime(duration);
      }
    }, 1000);
    setintervalid(intvid);
  };

  let stopTimer = () => {
    clearInterval(intervalid);
    setIsRunning(false);
    setTime(duration);
  };
    console.log('Interval time: ', intervalid);

  return { isRunning: isRunning, start: startTimer, stop: stopTimer, second: time };
}

export default useTimer;
