import { useEffect, useState } from "react";

const useWindowSize = (boolean) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [boolean]);
  return windowSize;
};

export default useWindowSize;
