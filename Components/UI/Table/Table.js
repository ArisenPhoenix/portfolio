import { useClass, useSelect } from "../../../Mercury/hooks/usehooks";

const Table = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { GENERAL, TABLES, BORDERS } = styles;
  const { bg, text } = theme;
  const { solid, smallRound } = BORDERS;
  const { inheritBorderRadius, inheritBackground } = GENERAL;
  const { fixed, auto } = TABLES;

  const classes = useClass([
    text,
    inheritBorderRadius,
    inheritBackground,
    solid,
    smallRound,
    props.className,
  ]);

  const tableClasses = useClass([
    props.auto === auto ? auto : fixed,
    props.tableClasses,
    inheritBorderRadius,
  ]);

  return (
    <div className={classes}>
      <table className={tableClasses}>
        {props.heads &&
          props.heads.map((head, index) => {
            <th key={useClass([index, "|", head])}>{head}</th>;
          })}
        <tbody>
          {props.rowData.map((data, index) => {
            const rowClass =
              props.perR && index % props.perR === 0 ? props.r1 : props.r2;
            return (
              <tr key={index} className={rowClass}>
                {data.map((datum, index) => {
                  props.perD && index % props.perD === 0 ? props.d1 : props.d2;

                  return (
                    <td
                      className={useClass([theme.text, props.tdClass])}
                      key={`${index}|${datum}`}
                    >
                      {datum}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
