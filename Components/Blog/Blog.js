import DisplayBlogs from "./DisplayBlogs/DisplayBlogs";
import { useSelect, useClass } from "../../Mercury/hooks/usehooks";

const Blog = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bgGlass, textGlass } = theme;
  const { DIVS, BORDERS, GENERAL, BUTTON } = styles;
  const { transparent } = GENERAL;

  const classes = useClass([bgGlass, textGlass, transparent]);
  return <DisplayBlogs blogs={props.blogs} className={classes} />;
};

export default Blog;
