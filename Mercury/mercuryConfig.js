// import { SUPER_LINKIFY } from "../Helpers/Nav/General/importAll";
import { SUPER_LINKIFY } from "../store/Redux/NavSlice/LINKIFY";
import { NAV_DATA, PROJECT_DATA, BLOG_DATA } from "../Mercury/mercuryData";

export const NavSlicePrep = () => {
  const links = NAV_DATA();
  const navData = {
    leftNavs: SUPER_LINKIFY(links.leftNavs),
    rightNavs: SUPER_LINKIFY(links.rightNavs),
    currentPage: null,
  };
  navData.dropDowns = { ...navData.leftNavs, ...navData.rightNavs };
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
