import { useEffect, useState } from "react";

export const useErrorMessage = (amountOfTime = 3000, startingState = null) => {
  const [message, setMessage] = useState(startingState);

  const setMessageState = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(startingState);
    }, amountOfTime);
  };

  return [message, setMessageState];
};
