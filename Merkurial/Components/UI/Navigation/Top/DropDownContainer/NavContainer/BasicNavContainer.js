import css from "./NavContainer.module.css";
import React, { useContext } from "react";
import { AdminContext } from "../../../../../../store1/Context/ADMIN_CONTEXT/admin_context";

const BasicNavContainer = (props) => {
  const adminCtx = useContext(AdminContext);
  const { admin, email, firstName, lastName } = adminCtx;
  const { NavButton, needsAdminArray } = props;

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
          <div className={css.buttonContainer}>
            <NavButton
              text="Home"
              href="/home"
              onClick={props.onClick}
              className={props.isMobile ? css.navContainerMobile : css.button}
              isDropped={props.isDropped}
            />
          </div>
          <>
            {isLoggedIn && (
              <div className={css.buttonContainer}>
                <NavButton
                  text="Profile"
                  href="/profile"
                  onClick={props.onClick}
                  className={
                    props.isMobile ? css.navContainerMobile : css.button
                  }
                  isDropped={props.isDropped}
                />
              </div>
            )}
          </>
          {admin && (
            <div className={css.buttonContainer}>
              <NavButton
                text="Add"
                href="/add"
                onClick={props.onClick}
                className={props.isMobile ? css.navContainerMobile : css.button}
                isDropped={props.isDropped}
              />
            </div>
          )}
          <>
            {isLoggedIn ? (
              <div className={css.buttonContainer}>
                <NavButton
                  text="Logout"
                  href="/login"
                  onClick={handleLogout}
                  className={
                    props.isMobile ? css.navContainerMobile : css.button
                  }
                  isDropped={props.isDropped}
                />
              </div>
            ) : (
              <div className={css.buttonContainer}>
                <NavButton
                  text="Login"
                  href="/login"
                  onClick={props.onClick}
                  className={
                    props.isMobile ? css.navContainerMobile : css.button
                  }
                  isDropped={props.isDropped}
                />
              </div>
            )}
          </>
        </div>
      )}
    </>
  );
};

export default BasicNavContainer;
