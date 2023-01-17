import TR from "./TR";
import TD from "./TD";
import CREATE_REACT_KEY from "../../../Helpers/Misc/createReactKey";
import React from "react";

const MapRows = (props) => {
  return (
    <>
      {row.map((data, index) => {
        return (
          <TR key={CREATE_REACT_KEY(index)}>
            <TD data={data} />
          </TR>
        );
      })}
    </>
  );
};

export default MapRows;
