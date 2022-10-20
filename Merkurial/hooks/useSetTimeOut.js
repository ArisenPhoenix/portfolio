import { useEffect, useState } from "react";
import {
  SAVE_TO_LOCAL_STORAGE,
  REMOVE_FROM_LOCAL_STORAGE,
  RETREIVE_FROM_LOCAL_STORAGE,
} from "../API_STORAGE/STORAGe/HANDLE_STORAGE";

let aTimer;

const useSetTimeOut = (timerName, startTimeMS, callBackPointer) => {
  if (!timerName) {
    throw Error("You Must Identify This Timer To Use it.");
  }

  const [previousTime, setPreviousTime] = useState(null);

  useEffect(() => {
    const potentialTime = RETREIVE_FROM_LOCAL_STORAGE(timerName);
    if (!potentialTime) {
      SAVE_TO_LOCAL_STORAGE({ time: startTimeMS }, timerName);
    }
    if (potentialTime) {
      setPreviousTime(potentialTime);
    }
  }, []);

  const [timeLeft, setTimeLeft] = useState(
    previousTime ? previousTime : startTimeMS
  );

  useEffect(() => {
    if (timeLeft <= 0) {
      callBackPointer && callBackPointer();
      REMOVE_FROM_LOCAL_STORAGE(timerName);
      return clearTimeout(aTimer);
    } else {
      aTimer = setTimeout(() => {
        setTimeLeft((prev) => {
          return prev - 1000;
        });
        return clearTimeout(aTimer);
      }, 1000);
    }
  }, [timeLeft]);

  return timeLeft;
};

export default useSetTimeOut;
