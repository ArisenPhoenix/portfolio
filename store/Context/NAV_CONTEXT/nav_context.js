import { createContext, useState } from "react";

export const NavContext = createContext({
  leftNavs: [],
  rightNavs: [],
  dropDowns: [],
  currentPage: [],
  leftNavsDefault: () => {},
  updateLeftNavs: () => {},
  updateCurrentPage: () => {},
});

const Nav_Context_Provider = (props) => {
  const leftNavItems = ["Projects", "Contact"];
  const rightNavItems = ["Blog"];
  const dropDownItems = [...leftNavItems, ...rightNavItems];
  const [currentPage, setCurrentPage] = useState([]);
  const [leftNavs, setLeftNavs] = useState(leftNavItems);

  const leftNavsDefault = () => {
    setLeftNavs(leftNavItems);
    return leftNavItems;
  };

  const updateLeftNavs = (item) => {
    setLeftNavs([item]);
    return item;
  };

  const navContextValue = {
    leftNavs: leftNavs,
    rightNavs: rightNavItems,
    dropDowns: dropDownItems,
    currentPage: currentPage,
    leftNavsDefault: leftNavsDefault,
    updateLeftNavs: updateLeftNavs,
    updateCurrentPage: setCurrentPage,
  };

  return (
    <NavContext.Provider value={navContextValue}>
      {props.children}
    </NavContext.Provider>
  );
};

export default Nav_Context_Provider;
