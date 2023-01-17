import { useState } from "react";
import BasicTop from "../../../../Merkurial/Components/UI/Navigation/Top/BasicTop";
import LogoButton from "../../../../Merkurial/Components/UI/Navigation/NavButtons/LogoButton";
import RightSideNavs from "../../../../Merkurial/Components/UI/Navigation/Sides/RightSideNavs";
import LeftSideNavs from "../../../../Merkurial/Components/UI/Navigation/Sides/LeftSideNavs";
import Logo from "../../../../media/mercury.jpg";
import css from "./TopNav.module.css";
import DropDown from "../../../../Merkurial/Components/UI/Navigation/Top/DropDownContainer/DropDown/DropDown";

const TopNav = (props) => {
  const isMobile = props.isMobile;
  const onNavClick = (pageName) => {
    props.updateCurrentPage(pageName);
  };

  const [displayDropDown, setDisplayDropDown] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);

  const handleClick = () => {
    if (displayDropDown === false) {
      navCtx.leftNavsDefault();
    }
    setDisplayDropDown((prev) => {
      return !prev;
    });
  };

  return (
    <BasicTop isMobile={isMobile}>
      <div className={css.navs}>
        <LogoButton
          href="/"
          src={Logo}
          alt="mercury.jpg"
          fill={false}
          className={css.logo}
        />
        {!isMobile && (
          <>
            <div className={css.leftNavDiv}>
              <div className={css.leftNavs}>
                <LeftSideNavs
                  leftSideNavs={props.leftSideNavs}
                  isMobile={isMobile}
                  onClick={onNavClick}
                  updateTop={props.updateCurrentPage}
                />
              </div>
            </div>

            <div className={css.rightNavDiv}>
              <div className={css.rightNavs}>
                <RightSideNavs
                  rightSideNavs={props.rightSideNavs}
                  isMobile={isMobile}
                  onClick={onNavClick}
                />
              </div>
            </div>
          </>
        )}

        {isMobile && (
          <DropDown
            className={css.dropDown}
            isMobile={isMobile}
            navItems={props.dropDownNavs}
          />
        )}
      </div>
    </BasicTop>
  );
};

export default TopNav;
