import { useState } from "react";
import TR from "./TR";

const TH = (props) => {
  const [headers, setHeaders] = useState(null);
  return <th>{props.children}</th>;
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
