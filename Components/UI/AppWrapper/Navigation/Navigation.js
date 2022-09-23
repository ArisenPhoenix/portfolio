import css from "./Navigation.module.css";
import LeftNavs from "./Navs/LeftNavs/LeftNavs";
import NavBrandImage from "./BrandItem/BrandItem";
import mercury from "../../../../media/mercury.jpg";
import DropDownContainer from "./DropDown/DropDownContainer/DropDownContainer";
import DropDownButton from "./DropDown/Button/DropDownButton";
import RightNavs from "./Navs/RightNavs/RightNavs";
import { useState, useContext, useEffect } from "react";
import { NavContext } from "../../../../store/NAV_CONTEXT/nav_context";
import OutsideAlerter from "../../../../Hooks/useAlertClickOut";
import useWindowSize from "../../../../Hooks/useWindowSize";

const Navigation = (props) => {
  const navCtx = useContext(NavContext);
  const leftNavs = navCtx.leftNavs;
  const rightNavItems = navCtx.rightNavs;
  const dropDownItems = navCtx.dropDowns;
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const leftClasses = `${css.leftTopNav} ${props.className}`;
  const rightClasses = `${css.rightTopNav} ${props.className}`;
  const [getWindow, setGetWindow] = useState(true);
  const { width, height } = useWindowSize(getWindow);

  const mobileNavItem = (item) => {
    if (width <= 600) {
      navCtx.updateLeftNavs(item);
    } else {
      navCtx.leftNavsDefault();
    }
  };

  useEffect(() => {
    setGetWindow((prev) => !prev);
  }, [displayDropDown]);

  const handleClick = () => {
    if (displayDropDown === false) {
      navCtx.leftNavsDefault();
    }
    setDisplayDropDown((prev) => {
      return !prev;
    });
  };

  const handleRightItemClick = () => {
    navCtx.leftNavsDefault();
  };

  return (
    <>
      <OutsideAlerter setToFalse={setDisplayDropDown}>
        <div className={css.wrapper}>
          <div className={`${css.main} ${props.className}`}>
            <div className={css.container}>
              <div className={leftClasses}>
                <NavBrandImage src={mercury} alt="mercury.jpg" href="/" />
                <div>
                  <LeftNavs items={leftNavs} />
                  <div>
                    <div className={rightClasses}>
                      <DropDownButton
                        src={mercury}
                        onClick={handleClick}
                        className="dropDownButton"
                        show={displayDropDown}
                      />
                    </div>

                    <RightNavs
                      items={rightNavItems}
                      className={displayDropDown}
                      onClick={handleRightItemClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${css.rightClasses} ${css.dropDownContainer}`}>
            <DropDownContainer
              rightItems={dropDownItems}
              show={displayDropDown}
              onClick={handleClick}
              updateTop={mobileNavItem}
            />
          </div>
        </div>
      </OutsideAlerter>
    </>
  );
};

export default Navigation;
