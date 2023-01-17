import TR from "./TR";
import TH from "./TH";
import React from "react";
import CREATE_REACT_KEY from "../../../Helpers/Misc/createReactKey";

const MapHeaders = (props) => {
  return (
    <>
      {props.row.map((data, index) => {
        return (
          <TR key={CREATE_REACT_KEY(index)}>
            <TH data={data} />
          </TR>
        );
      })}
    </>
  );
};

export default MapHeaders;
