import SocialMediaButton from "../../UI/SocialMediaButton/SocialMediaButton";
import { useSelect } from "../../../Merkurial/hooks/usehooks";
import Table from "../../UI/Table/Table";

const ProjectButtons = (props) => {
  const { styles } = useSelect("THEME");
  const { GENERAL } = styles;
  const { centerAll } = GENERAL;

  const sMB1 = <SocialMediaButton icon={props.webIcon} href={props.webLink} />;
  const sMB2 = <SocialMediaButton icon={props.gitIcon} href={props.gitLink} />;
  const buttons = [[sMB1, sMB2]];
  return <Table rowData={buttons} tdClass={centerAll} />;
};

export default ProjectButtons;
