import Table from "../../../UI/Table/Table";
import { useSelect, useClass } from "../../../../Merkurial/hooks/usehooks";

const Stack = (props) => {
  const { styles } = useSelect("THEME");
  const { DIVS, GENERAL } = styles;
  const { inheritBorderRadius } = GENERAL;
  const centered = DIVS.centerAll;
  const stack = props.stack;
  const data = [stack];
  const classes = useClass([centered, inheritBorderRadius]);
  return <Table rowData={data} tdClass={classes} />;
};

export default Stack;
