import css from "./Navigation.module.css";
import LeftNavs from "./Navs/LeftNavs/LeftNavs";
import NavBrandImage from "./BrandItem/BrandItem";
import mercury from "../../../../media/mercury.jpg";
import DropDownContainer from "./DropDown/DropDownContainer/DropDownContainer";
import DropDownButton from "./DropDown/Button/DropDownButton";
import LeftNav from "./Navs/LeftNavs/LeftNav/LeftNav";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { NavContext } from "../../../../store/Context/NAV_CONTEXT/nav_context";
import OutsideAlerter from "../../../../Hooks/useAlertClickOut";
import {
  useClass,
  useSelect,
  useWindow,
} from "../../../../Mercury/hooks/usehooks";
import { LINKIFY } from "../../../../Helpers/Nav/Text/Linkify";
import DE_LINKIFY from "../../../../Helpers/Nav/Text/DeLinkify";

const Navigation = (props) => {
  const router = useRouter();
  const page = router.pathname;
  const navCtx = useContext(NavContext);
  const { width, height } = useWindow();
  const { NAV, THEME } = useSelect();

  const { theme, styles } = THEME;
  const { bg, text } = theme;
  const { rightNavs, leftNavs } = NAV;

  const { NAVIGATION } = styles;
  const { navigationHeight, navigationMargin } = NAVIGATION;

  const navigationClasses = useClass([navigationHeight, navigationMargin]);

  const dropDownItems = navCtx.dropDowns;
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const [currentPage, setCurrentPage] = useState({
    item: DE_LINKIFY(page, null, "SET CURRENT PATH"),
    link: page,
  });

  const currentTheme = useClass([bg, text]);
  const leftClasses = useClass([css.leftTopNav, currentTheme]);
  const rightClasses = useClass([css.rightTopNav, currentTheme]);
  const mainClass = useClass([props.className, currentTheme]);

  const WIDTH = Number(width);

  const showNavs = WIDTH < 615 ? false : true;

  const mobileNavItem = (item) => {
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

  return (
    <div className={navigationClasses}>
      <OutsideAlerter setToFalse={setDisplayDropDown}>
        <div className={mainClass}>
          <NavBrandImage src={mercury} alt="mercury.jpg" href="/" />

          <div className={leftClasses}>
            <LeftNavs
              items={leftNavs}
              left={true}
              show={showNavs}
              updateTop={mobileNavItem}
            />

            <DropDownButton
              src={mercury}
              onClick={handleClick}
              show={displayDropDown}
            />

            {showNavs === false && (
              <LeftNav
                link={currentPage.link}
                text={currentPage.item}
                active={true}
                updateTop={() => {}}
              />
            )}

            <LeftNavs
              updateTop={mobileNavItem}
              items={rightNavs}
              className={rightClasses}
              left={false}
              show={showNavs}
            />
          </div>
          <div
            className={useClass([
              css.rightClasses,
              css.dropDownContainer,
              currentTheme,
            ])}
          >
            <DropDownContainer
              items={dropDownItems}
              show={displayDropDown}
              onClick={handleClick}
              updateTop={mobileNavItem}
            />
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
};

export default Navigation;
