import TR from "./TR";
import TH from "./TH";
import CREATE_KEY from "../../Helpers/createKey";

const MapHeaders = (props) => {
  return (
    <>
      {props.row.map((data, index) => {
        return (
          <TR key={CREATE_KEY(index)}>
            <TH data={data} />
          </TR>
        );
      })}
    </>
  );
};

export default MapHeaders;
