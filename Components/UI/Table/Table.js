import { useClass, useSelect } from "../../../Merkurial/hooks/usehooks";
import { TD_OBJECT, TD_GENERAL } from "./TABLE_DATA";

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

  const tdClass = useClass([theme.text, props.tdClass]);

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
              <tr key={`ROW|${index}`} className={rowClass}>
                {data.map((datum, index) => {
                  if (datum === null) return;
                  props.perD && index % props.perD === 0 ? props.d1 : props.d2;

                  {
                    return typeof datum === "string" || datum?.$$typeof ? (
                      <TD_GENERAL
                        className={tdClass}
                        key={`TD_GENERAL|${index}`}
                        data={datum}
                      />
                    ) : (
                      <TD_OBJECT
                        className={tdClass}
                        key={`TD_OBJECT|${index}`}
                        data={datum}
                      />
                    );
                  }
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
