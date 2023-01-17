import {
  useWindow,
  useClass,
  useSelect,
} from "../../../Merkurial/hooks/usehooks";
import TopNav from "./TopNav/TopNav";
import Canvas from "../../../Merkurial/Components/UI/Navigation/Canvas/Canvas";
import BottomNav from "./Footer/BottomNav";
import { useContext } from "react";
import { NavContext } from "../../../store/Context/NAV_CONTEXT/nav_context";
import css from "../../../Merkurial/Components/UI/Navigation/Navigation.module.css";

const Navigation = (props) => {
  const navCtx = useContext(NavContext);

  const { width } = useWindow();
  const isMobile = width < 700;
  const {
    leftNavs,
    rightNavs,
    dropDowns,
    currentPage,
    leftNavsDefault,
    updateLeftNavs,
    updateCurrentPage,
  } = navCtx;

  const { THEME } = useSelect();
  const { styles } = THEME;
  const { BORDERS } = styles;
  const { roundgold } = BORDERS;
  const wrapperClass = useClass([roundgold, css.navigation]);

  return (
    <div className={wrapperClass}>
      <TopNav
        isMobile={isMobile}
        leftSideNavs={leftNavs}
        rightSideNavs={rightNavs}
        dropDownNavs={dropDowns}
        leftNavsDefault={leftNavsDefault}
        currentPage={currentPage}
        updateLeftNavs={updateLeftNavs}
        updateCurrentPage={updateCurrentPage}
      />
      <Canvas isMobile={isMobile}>{props.children}</Canvas>
      <BottomNav isMobile={isMobile} />
    </div>
  );
};

export default Navigation;
