import React, { useRef, useEffect } from "react";

//  Hook that alerts clicks outside of the passed ref

export const useOutsideAlerter = (ref, setToFalse) => {
  // console.log("CLICKED OUTSIDE OF DROP DOWN");
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setToFalse(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const OutsideAlerter = (props) => {
  const wrapperRef = useRef(null);
  const setToFalse = props.setToFalse;
  useOutsideAlerter(wrapperRef, setToFalse);
  return <div ref={wrapperRef}>{props.children}</div>;
};
export default OutsideAlerter;
