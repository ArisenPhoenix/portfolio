import BasicBottom from "../../../../Merkurial/Components/UI/Navigation/Bottom/BasicBottom";
const BottomNav = (props) => {
  return <BasicBottom isMobile={props.isMobile}>{props.children}</BasicBottom>;
};

export default BottomNav;
