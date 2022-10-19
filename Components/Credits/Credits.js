import Table from "../UI/Table/Table";
import { useSelect, useClass } from "../../Merkurial/hooks/usehooks";

const Credits = (props) => {
  // This One Takes a props.rowData as well and passes is to the Table rowData
  const { styles } = useSelect("THEME");
  const { COLORS } = styles;
  const { pink, blackText } = COLORS;
  const linkStyles = useClass([blackText, pink]);

  const iconsLinkData = (
    <a
      target="_blank"
      href="https://icons8.com"
      className={linkStyles}
      key="icons8"
    >
      Icons8
    </a>
  );
  const creditRow = [[{ text: `Icons By: `, credits: [iconsLinkData] }]];
  return (
    <div>
      <Table rowData={creditRow} />
    </div>
  );
};

export default Credits;
