import TR from "./TR";
import TD from "./TD";
import CREATE_KEY from "../../Helpers/createKey";

const MapRows = (props) => {
  return (
    <>
      {row.map((data, index) => {
        return (
          <TR key={CREATE_KEY(index)}>
            <TD data={data} />
          </TR>
        );
      })}
    </>
  );
};

export default MapRows;
