import { Fragment } from "react";

export const TD_OBJECT = (props) => {
  const data = props.data;
  const keys = Object.keys(props.data);
  return keys.map((datum, index) => {
    const tdInfo = data[datum];
    return (
      <Fragment key={`Opening TD OBJECT${index}`}>
        {typeof tdInfo === Array ? (
          <td className={props.className} key={`NormalTD Main TD|${index}`}>
            {tdInfo.map((info, index2) => {
              return (
                <Fragment key={`TD_OBJECT NormalTD ACTUAL DATA|${index2}`}>
                  {info}
                </Fragment>
              );
            })}
          </td>
        ) : (
          <td key={`TD_OBJECT NormalTD ACTUAL DATA|${index}`}>{tdInfo}</td>
        )}
      </Fragment>
    );
  });
};

export const TD_GENERAL = (props) => {
  return <td className={props.className}>{props.data}</td>;
};
