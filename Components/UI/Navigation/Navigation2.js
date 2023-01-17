import Navs from "./Navs/Navs";
import NavBrandImage from "./BrandItem/BrandItem";
import mercury from "../../../../media/mercury.jpg";
import DropDownContainer from "./DropDown/DropDownContainer/DropDownContainer";
import DropDownButton from "./DropDown/Button/DropDownButton";
import Nav from "./Navs/Nav/Nav";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { NavContext } from "../../../../Merkurial/store1/Context/NAV_CONTEXT/nav_context";
import OutsideAlerter from "../../../../Merkurial/hooks/useAlertClickOut";
import {
  useClass,
  useSelect,
  useWindow,
} from "../../../../Merkurial/hooks/usehooks";
import { LINKIFY } from "../../../../Helpers/Nav/Text/Linkify";
import DE_LINKIFY from "../../../../Helpers/Nav/Text/DeLinkify";

const Navigation = (props) => {
  const router = useRouter();
  const page = router.pathname;
  const navCtx = useContext(NavContext);
  const { width } = useWindow();
  const { NAV, THEME } = useSelect();

  const { theme, styles } = THEME;
  const { bg, text, nav } = theme;
  const { rightNavs, leftNavs, dropDowns } = NAV;

  const { NAVIGATION, GENERAL } = styles;
  const { floatLeft, floatRight } = GENERAL;
  const {
    navMain,
    navigationMargin,
    navGroup,
    navDiv,
    dropDownButton,
    inherit,
  } = NAVIGATION;

  const navigationClasses = useClass([
    props.className,
    navMain,
    navigationMargin,
    bg,
    text,
    nav,
  ]);

  const [displayDropDown, setDisplayDropDown] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [currentPage, setCurrentPage] = useState({
    item: DE_LINKIFY(page, null, "SET CURRENT PATH"),
    link: page,
  });

  const currentTheme = useClass([bg, text]);
  const navDivClass = useClass([navDiv, inherit]);
  const leftClasses = useClass([floatLeft, currentTheme, navGroup]);
  const rightClasses = useClass([currentTheme]);
  const mainClass = useClass([currentTheme, inherit]);

  const WIDTH = Number(width);

  useEffect(() => {
    if (WIDTH < 615) {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }
  }, [WIDTH]);

  const showNavs = WIDTH < 615 ? false : true;

  const handleUpdateTop = (item) => {
    if (WIDTH <= 615) {
      navCtx.updateLeftNavs(item);
      const data = {
        item: item,
        link: LINKIFY(item, null, "MOBILE NAV ITEM"),
      };
      setCurrentPage(data);
    } else {
      navCtx.leftNavsDefault();
    }
  };

  const handleClick = () => {
    if (displayDropDown === false) {
      navCtx.leftNavsDefault();
    }
    setDisplayDropDown((prev) => {
      return !prev;
    });
  };

  const dropDownClass = useClass([currentTheme]);

  return (
    <div className={navigationClasses}>
      <OutsideAlerter setToFalse={setDisplayDropDown}>
        <div className={mainClass}>
          <NavBrandImage src={mercury} alt="mercury.jpg" href="/" />

          <div className={navDivClass}>
            <Navs
              items={leftNavs}
              className={leftClasses}
              isLeft={true}
              show={showNavs}
              updateTop={handleUpdateTop}
            />

            {showNavs === false && (
              <Nav
                link={currentPage.link}
                text={currentPage.item}
                active={true}
                updateTop={() => {}}
                isLeft={true}
              />
            )}

            <Navs
              items={rightNavs}
              navDivClassName={floatRight}
              className={rightClasses}
              isLeft={false}
              show={showNavs}
              updateTop={handleUpdateTop}
            />

            <DropDownButton
              src={mercury}
              onClick={handleClick}
              show={displayButton}
              className={dropDownButton}
            />

            <div className={dropDownClass}>
              <DropDownContainer
                items={dropDowns}
                show={displayDropDown}
                onClick={handleClick}
                updateTop={handleUpdateTop}
              />
            </div>
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
};

export default Navigation;
