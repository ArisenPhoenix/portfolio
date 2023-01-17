import { useState } from "react";
import TR from "./TR";
import React from "react";

const TH = (props) => {
  const [headers, setHeaders] = useState(null);
  return <th className={props.className}>{props.children}</th>;
};

export default TH;

export const MapHeaders = (props) => {
  return (
    <>
      {row.map((data, index) => {
        return (
          <TR>
            <TH data={data} />
          </TR>
        );
      })}
    </>
  );
};
