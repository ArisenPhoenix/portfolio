import TAB from "./TAB";
import TB from "./TB";
import TH from "./TH";
import TR from "./TR";
import TD from "./TD";
import MapHeaders from "./MapHeaders";
import MapData from "./MapData";
import CREATE_REACT_KEY from "../../../Helpers/Misc/createReactKey";
import React from "react";

export const TABLE = (props) => {
  return <TAB className={props.className}>{props.children}</TAB>;
};

export const T_BODY = (props) => {
  return <TB className={props.className}>{props.children}</TB>;
};

export const T_HEADER = (props) => {
  return <TH className={props.className}>{props.children}</TH>;
};

export const T_ROW = (props) => {
  return (
    <TR
      className={props.className}
      index={props.index}
      onClick={props.onClick}
      value={props.value}
    >
      {props.children}
    </TR>
  );
};

export const T_DATA = (props) => {
  return <TD className={props.className}>{props.children}</TD>;
};

const Table = (props) => {
  const wantHeaders = false;
  const tables = props.tables;

  {
    props.data.map((table, index) => {
      return (
        <TABLE key={CREATE_REACT_KEY(index)}>
          <T_BODY>
            {
              <>
                {wantHeaders &&
                  table.map((row, index) => {
                    return (
                      <div key={CREATE_REACT_KEY(index)}>
                        <MapHeaders data={Object.keys(row)} />
                        <MapData data={Object.values(row)} />;
                      </div>
                    );
                  })}
                {!wantHeaders &&
                  table.map((row, index) => {
                    return (
                      <div key={CREATE_REACT_KEY(index)}>
                        <MapData data={Object.values(row)} />
                      </div>
                    );
                  })}
              </>
            }
          </T_BODY>
        </TABLE>
      );
    });
  }
};

export default Table;
