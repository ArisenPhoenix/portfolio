import { SUPER_LINKIFY } from "./store/Redux/NavSlice/LINKIFY";
import { NAV_DATA, PROJECT_DATA, BLOG_DATA } from "../Merkurial/mercuryData";

export const NavSlicePrep = () => {
  const links = NAV_DATA();
  const leftNavs = SUPER_LINKIFY(links.leftNavs);
  const rightNavs = SUPER_LINKIFY(links.rightNavs);

  const navData = {
    leftNavs: leftNavs,
    rightNavs: rightNavs,
    currentPage: null,
    dropDowns: links.dropDowns,
  };

  return navData;
};

export const ProjectSlicePrep = () => {
  const projects = PROJECT_DATA();
  return projects;
};

export const BlogSlicePrep = () => {
  const blogs = BLOG_DATA();
  return blogs;
};
