import TAB from "./TAB";
import TB from "./TB";
import TH from "./TH";
import TR from "./TR";
import TD from "./TD";
import MapHeaders from "./MapHeaders";
import MapData from "./MapData";
import CREATE_KEY from "../../Helpers/createKey";

export const TABLE = (props) => {
  return <TAB>{props.children}</TAB>;
};

export const T_BODY = (props) => {
  return <TB>{props.children}</TB>;
};

export const T_HEADER = (props) => {
  return <TH>{props.children}</TH>;
};

export const T_ROW = (props) => {
  return <TR>{props.children}</TR>;
};

export const T_DATA = (props) => {
  return <TD>{props.children}</TD>;
};

const Table = (props) => {
  const testData = [
    [
      [
        { fName: "Brandon", lName: "Marcure" },
        { fname: "Alina", lName: "Marcure" },
      ],
    ],
  ];

  const wantHeaders = false;
  const tables = props.tables;

  {
    testData.map((table, index) => {
      return (
        <TABLE key={CREATE_KEY(index)}>
          <T_BODY>
            {
              <>
                {wantHeaders &&
                  table.map((row, index) => {
                    return (
                      <div key={CREATE_KEY(index)}>
                        <MapHeaders data={Object.keys(row)} />
                        <MapData data={Object.values(row)} />;
                      </div>
                    );
                  })}
                {!wantHeaders &&
                  table.map((row, index) => {
                    return (
                      <div key={CREATE_KEY(index)}>
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
