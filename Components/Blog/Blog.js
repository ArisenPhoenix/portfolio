import DisplayBlogs from "./DisplayBlogs/DisplayBlogs";
import { useClass, useSelect } from "../../Merkurial/hooks/usehooks";

const Blog = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bgGlass, textGlass } = theme;
  const { GENERAL } = styles;
  const { transparent } = GENERAL;

  const classes = useClass([bgGlass, textGlass, transparent]);
  return <DisplayBlogs blogs={props.blogs} className={classes} />;
};

export default Blog;
