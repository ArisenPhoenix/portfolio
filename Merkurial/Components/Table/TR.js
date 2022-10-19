import TD from "./TD";

const TR = (props) => {
  return <tr>{props.children}</tr>;
};

export default TR;

export const MapRows = (props) => {
  return (
    <>
      {row.map((data, index) => {
        return (
          <TR>
            <TD data={data} />
          </TR>
        );
      })}
    </>
  );
};
