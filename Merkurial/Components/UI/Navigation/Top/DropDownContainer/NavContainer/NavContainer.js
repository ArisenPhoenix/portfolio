import css from "./NavContainer.module.css";
import React, { useContext, Fragment } from "react";
import { AdminContext } from "../../../../../../../store/Context/ADMIN_CONTEXT/admin_context";
import { LINKIFY } from "../../../../../../Helpers/Text/Linkify";
import CreateReactKey from "../../../../../../Helpers/Misc/createReactKey";

const NavContainer = (props) => {
  const adminCtx = useContext(AdminContext);
  const navItems = props.navItems;
  const conditions = props.conditions;
  const { admin, email, firstName, lastName } = adminCtx;
  const { NavButton } = props;

  const handleLogout = () => {
    props.onClick();
    userCtx.logoutUser();
  };
  return (
    <>
      {props.isDropped && (
        <div
          className={
            props.isMobile ? css.navContainerMobile : css.navButtonsContainer
          }
        >
          {navItems.map((item, index) => {
            const requiresAdmin = conditions.indexOf(item.toLowerCase()) === -1;
            return (
              <Fragment key={CreateReactKey(index)}>
                {requiresAdmin && admin && (
                  <NavButton
                    text={item}
                    href={LINKIFY(item)}
                    onClick={props.onClick}
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavContainer;
