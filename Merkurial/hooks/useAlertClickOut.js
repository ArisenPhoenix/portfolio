import React, { useRef, useEffect } from "react";

//  Hook that alerts clicks outside of the passed ref

export const useOutsideAlerter = (ref, setToFalse) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToFalse(false);
      }
    }
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
