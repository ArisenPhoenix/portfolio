import css from "./ContactInfo.module.css";
import Heading from "../../UI/Text/Heading";
import Table from "../../UI/Table/Table";
import { useSelect, useClass } from "../../../Mercury/hooks/usehooks";

const ContactInfo = (props) => {
  const { styles } = useSelect("THEME");
  const { GENERAL, TABLES, TEXT, DIMENSIONS } = styles;
  const {
    centerAll,
    mediumWidth,
    smallBasicPadding,
    inheritBorderRadius,
    superBold,
    overFlowX,
  } = GENERAL;

  const { thirdY } = DIMENSIONS;

  const { fixed, color1, color2, largeRowHeight } = TABLES;
  const { left, right } = TEXT;

  const mainClasses = useClass([centerAll, mediumWidth, props.className]);

  const tdClass = useClass([superBold, overFlowX]);
  const row1Class = useClass([largeRowHeight, color2]);
  const row2Class = useClass([largeRowHeight, color1]);
  const d1Class = useClass([smallBasicPadding, left]);
  const d2Class = useClass([smallBasicPadding, right]);
  const tableClasses = useClass([inheritBorderRadius, centerAll, fixed]);
  const info = props.info;
  const data = Object.keys(info);
  const rowData = data.map((datum, index) => {
    return [datum, info[datum]];
  });

  return (
    <div className={mainClasses}>
      <Heading text="Personal Contact Info" className={css.heading} />
      <Table
        className={thirdY}
        tableClasses={tableClasses}
        rowData={rowData}
        r1={row1Class}
        r2={row2Class}
        d1={d1Class}
        d2={d2Class}
        perR={2}
        perD={2}
        tdClass={tdClass}
      />
    </div>
  );
};

export default ContactInfo;
